// import Razorpay from "razorpay";
// import { NextResponse } from "next/server";

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const {
//       amount,
//       preferred_date,
//       preferred_time,
//       language,
//       email,
//       phone,
//       name,
//     } = body;

//     const order = await razorpay.orders.create({
//       amount, // paise
//       currency: "INR",
//       receipt: `rcpt_${Date.now()}`,

//       // 🔥 THIS IS WHAT WILL COME IN WEBHOOK
//       notes: {
//         preferred_date,
//         preferred_time,
//         language,
//         email,
//         phone,
//         name,
//         source: "AVN Consultation",
//       },
//     });

//     return NextResponse.json(order);
//   } catch (err) {
//     console.error("Create order error", err);
//     return NextResponse.json(
//       { error: "Unable to creates order" },
//       { status: 500 }
//     );
//   }
// }
