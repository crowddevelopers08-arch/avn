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
    specialization: "Treatment of Musculoskeletal and Neurological Conditions",
    description:
      "Dr. Ramesh R Varier graduated as 1st Rank Holder from Madras University in 1986. With over 35 years of mastery in musculoskeletal and neurological conditions, he offers unmatched expertise in sciatica care and non-surgical spinal treatment.",
    education:
      "Pioneer in non-surgical sciatica treatment, delivering lasting relief from nerve pain, stiffness, and reduced mobility through proven Ayurvedic protocols and herbal formulations.",
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
      "Dr. Sridevi Rajeev is a highly accomplished Ayurvedic physician with exceptional expertise in treating complex musculoskeletal and rheumatological conditions. Her compassionate approach and deep understanding of nerve-related disorders make her a trusted healer.",
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
      "Dr. Biju Madhavan brings extensive expertise in integrating traditional Ayurvedic wisdom with modern medical diagnostics. His holistic approach to treating musculoskeletal and neurological disorders has helped numerous sciatica patients achieve optimal health.",
    education:
      "MD (Ayu) - integrates Ayurvedic treatment with modern diagnostics and therapeutic methods; a strong proponent of holistic healing.",
    achievements:
      "Treated more than 5,000 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
];

const NsScLpDoctorProfile = () => <LpDoctorProfileSection doctors={doctors} />;

export default NsScLpDoctorProfile;
