export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";

interface FeedbackInput {
  name: string;
  email: string;
  phone: string;
  suggestions: string;
}

async function appendFeedbackToSheet(data: FeedbackInput) {
  const endpoint =
    process.env.GOOGLE_SHEETS_FEEDBACK_URL ||
    process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!endpoint) {
    throw new Error("Google Sheets webhook URL is not set");
  }

  const payload = {
    timestamp: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.replace(/[\s\-()]/g, "").replace(/^\+91/, ""),
    suggestions: data.suggestions.trim(),
    source: "AVN Arogya - Client Feedback",
    pageName: "client-feedback",
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const text = await res.text();

  if (
    text.includes("<title>Access denied</title>") ||
    text.includes("You need access") ||
    text.includes("Open the document directly")
  ) {
    throw new Error(
      "Google Apps Script access denied. Redeploy the web app with access set to Anyone."
    );
  }

  if (!res.ok) {
    throw new Error(text || `Google Sheets responded with ${res.status}`);
  }

  try {
    return text ? JSON.parse(text) : { success: true };
  } catch {
    return { success: true };
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name = "", email = "", phone = "", suggestions = "" } = body;

  if (!name.trim()) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 }
    );
  }

  if (!email.trim()) {
    return NextResponse.json(
      { error: "Please enter your email address." },
      { status: 400 }
    );
  }

  if (!phone.trim()) {
    return NextResponse.json(
      { error: "Please enter your phone number." },
      { status: 400 }
    );
  }

  if (!suggestions.trim()) {
    return NextResponse.json(
      { error: "Please share your suggestions." },
      { status: 400 }
    );
  }

  const feedbackData: FeedbackInput = { name, email, phone, suggestions };

  try {
    const sheetResult = await appendFeedbackToSheet(feedbackData);

    return NextResponse.json(
      {
        success: true,
        sheet: "ok",
        result: sheetResult,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to submit feedback";

    console.error("[Google Sheets - Feedback] Error:", message);

    return NextResponse.json(
      {
        error: "Failed to submit feedback to Google Sheets.",
        details: message,
      },
      { status: 500 }
    );
  }
}
