import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    // 1️⃣ Raw body read (signature verify-ku important)
    const bodyText = await req.text();
    const body = JSON.parse(bodyText);

    // 2️⃣ Razorpay signature verify
    const razorpaySignature = req.headers.get("x-razorpay-signature") || "";
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET as string)
      .update(bodyText)
      .digest("hex");

    if (razorpaySignature !== expectedSignature) {
      console.error("❌ Invalid Razorpay signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // 3️⃣ Event check
    if (body.event !== "payment.captured") {
      return NextResponse.json({ status: "ignored" });
    }

    // 4️⃣ Payment data
    const payment = body.payload.payment.entity;

    const email = payment.notes?.email;
    const phone = payment.notes?.phone;

    if (!email && !phone) {
      console.error("❌ Lead identifier missing");
      return NextResponse.json({ error: "Lead info missing" }, { status: 400 });
    }

    // 5️⃣ Find Lead in Zoho (by email or phone)
    const leadId = await findZohoLead(email, phone);

    if (!leadId) {
      console.error("❌ Lead not found in Zoho");
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    // 6️⃣ Create Meeting in Zoho
    await createZohoMeeting(leadId);

    // 7️⃣ (Optional) Update Lead Payment Status
    await updateLeadStatus(leadId);

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("🔥 Webhook error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/* ---------------- ZOHO HELPERS ---------------- */

async function findZohoLead(email?: string, phone?: string) {
  const query = email
    ? `Email:equals:${email}`
    : `Phone:equals:${phone}`;

  const res = await fetch(
    `${process.env.ZOHO_BASE_URL}/crm/v2/Leads/search?criteria=(${query})`,
    {
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await res.json();
  return data?.data?.[0]?.id || null;
}

async function createZohoMeeting(leadId: string) {
  const now = new Date();
  const start = new Date(now.getTime() + 10 * 60000);
  const end = new Date(start.getTime() + 30 * 60000);

  await fetch(`${process.env.ZOHO_BASE_URL}/crm/v2/Meetings`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Event_Title: "Paid Consultation",
          What_Id: leadId,
          Start_DateTime: start.toISOString(),
          End_DateTime: end.toISOString(),
          Description: "Auto-created after Razorpay payment success",
        },
      ],
    }),
  });
}

async function updateLeadStatus(leadId: string) {
  await fetch(`${process.env.ZOHO_BASE_URL}/crm/v2/Leads`, {
    method: "PUT",
    headers: {
      Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          id: leadId,
          Lead_Status: "Payment Completed",
        },
      ],
    }),
  });
}
