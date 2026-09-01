import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Non-Surgical Care for Avascular Necrosis | AVN Arogya",
  description:
    "Your 1:1 AVN consultation with AVN Arogya is confirmed. Here's what happens next and what to keep ready for the call.",
  // Conversion page — keep it out of search results so it never ranks over the LP.
  robots: { index: false, follow: false },
};

export default function NonSurgicalCareForAvascularNecrosisThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
