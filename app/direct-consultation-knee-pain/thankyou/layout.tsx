import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Non-Surgical Care for Knee Pain | AVN Arogya",
  description:
    "Your 1:1 knee pain consultation with AVN Arogya is confirmed. Here's what happens next and what to keep ready for the call.",
  // Conversion page — keep it out of search results so it never ranks over the LP.
  robots: { index: false, follow: false },
};

export default function DirectConsultationKneePainThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
