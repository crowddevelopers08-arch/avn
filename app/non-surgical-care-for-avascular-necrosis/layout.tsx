import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Surgical Care for Avascular Necrosis | AVN Arogya",
  description:
    "Explore non-surgical care for avascular necrosis with AVN Arogya's Ayurveda and physiotherapy approach.",
};

export default function NonSurgicalCareForAvascularNecrosisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
