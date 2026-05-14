"use client";

import { withImageKit } from "@/lib/imagekit";
import { LpDoctorProfileSection } from "@/components/shared/LpDoctorProfileSection";
import type { LpDoctorProfile } from "@/components/shared/LpDoctorProfileCards";

const doctors: LpDoctorProfile[] = [
  {
    name: "Dr. Ramesh R Varier",
    image: withImageKit("/Dr.Ramesh.jpg"),
    experience: "35+ Years",
    title: "Managing Director and Senior Physician",
    specialization: "Treatment of Musculoskeletal and Joint Conditions",
    description:
      "Dr. Ramesh R Varier graduated as 1st Rank Holder from Madras University in 1986. With over 35 years of mastery in musculoskeletal and joint conditions, he offers unmatched expertise in joint pain care and arthritis management.",
    education:
      "Pioneer in non-surgical joint pain treatment, delivering lasting relief from stiffness, swelling, and reduced mobility through proven Ayurvedic protocols and herbal formulations.",
    achievements:
      "Guides patients toward holistic wellness by optimizing diet, lifestyle, and mind-body balance with clear multilingual care.",
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
  },
  {
    name: "Dr. Sridevi Rajeev",
    image: withImageKit("/doctwo.jpg"),
    experience: "32 Years",
    title: "Director and Chief Physician",
    specialization: "Treatment of Musculoskeletal, Rheumatological and Developmental Disorders",
    description:
      "Dr. Sridevi Rajeev is a highly accomplished Ayurvedic physician with exceptional expertise in treating complex musculoskeletal and rheumatological conditions. Her compassionate approach makes her a trusted healer for chronic joint pain patients.",
    education:
      "B.A.M.S (1st Rank Holder from Mahatma Gandhi University). Fine-tuning Ayurvedic Therapies for personalized treatment protocols. Great listener and healer.",
    achievements:
      "Treated more than 3,500 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
  {
    name: "Dr. Biju Madhavan",
    image: withImageKit("/docthree.jpg"),
    experience: "23 Years",
    title: "Medical Superintendent",
    specialization: "Treatment of Musculoskeletal and Neurological Disorders",
    description:
      "Dr. Biju Madhavan brings extensive expertise in integrating traditional Ayurvedic wisdom with modern medical diagnostics. His holistic approach has helped numerous joint pain patients achieve better movement and quality of life.",
    education:
      "MD (Ayu) - integrates Ayurvedic treatment with modern diagnostics and therapeutic methods; a strong proponent of holistic healing.",
    achievements:
      "Treated more than 5,000 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
];

const JpLpDoctorProfile = () => <LpDoctorProfileSection doctors={doctors} />;

export default JpLpDoctorProfile;
