import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalised Non-Surgical Care for Knee Pain | AVN Arogya",
  description:
    "Explore personalised non-surgical knee pain care with AVN Arogya — detailed evaluation, lifestyle assessment, and a 1:1 expert consultation for just ₹150.",
};

export default function DirectConsultationKneePainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
