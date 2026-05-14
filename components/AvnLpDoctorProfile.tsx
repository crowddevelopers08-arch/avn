"use client";

import { withImageKit } from "@/lib/imagekit";
import { LpDoctorProfileSection } from "@/components/shared/LpDoctorProfileSection";
import type { LpDoctorProfile } from "@/components/shared/LpDoctorProfileCards";

const doctors: LpDoctorProfile[] = [
  {
    name: "Dr. Ramesh R Varier",
    image: withImageKit("/Dr.Ramesh.jpg"),
    experience: "35+ Years",
    descriptions: [
      "Dr. Ramesh R Varier, our Managing Director and Senior Physician, graduated as 1st Rank Holder from Madras University in 1986. With over 35 years of mastery in this field, he offers unmatched expertise in musculoskeletal solutions.",
      "Dr. Varier is a pioneer in non-surgical Avascular Necrosis breakthroughs, ensuring pain-free living. Experience the power of his herbal elixirs, including proven Ayurvedic remedies in tablet and capsule form, for your natural wellness.",
      "Discover holistic wellness with Dr. Varier, who optimizes your diet, lifestyle, and mind-body connection. Enjoy multilingual care with clear communication in English, Hindi, Tamil, and Malayalam for your utmost comfort.",
    ],
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
  },
];

const AvnLpDoctorProfile = () => (
  <LpDoctorProfileSection doctors={doctors} heading="Meet Our Doctor" />
);

export default AvnLpDoctorProfile;
