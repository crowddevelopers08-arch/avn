import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Avascular Necrosis Treatment | AVN Arogya",
  description:
    "Your appointment request with AVN Arogya is received. Here's what happens next and what to keep ready for your consultation.",
  // Conversion page — keep it out of search results so it never ranks over the LP.
  robots: { index: false, follow: false },
};

export default function AvascularNecrosisTreatmentThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
