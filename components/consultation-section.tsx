"use client";

import { withImageKit } from "@/lib/imagekit";
import {
  LegacyDoctorProfiles,
  type LegacyDoctorProfile,
} from "@/components/shared/LegacyDoctorProfiles";

const doctors: LegacyDoctorProfile[] = [
  {
    name: "Dr. Ramesh R Varier",
    image: withImageKit("Dr.Ramesh.jpg"),
    experience: "35+ Years",
    title: "Managing Director & Chief Ayurvedic Physician â€“ AVN Arogya Ayurvedic Hospital",
    specialization: "Specialist in Spine & Joint Disorders | 35+ Years of Clinical Excellence",
    description:
      "Dr. Varier is a nationally recognised Ayurvedic authority in the treatment of spinal disorders, including lumbar spondylosis, herniated discs, sciatica, and spinal stenosis. With over 3 decades of clinical experience, he has helped thousands of patients avoid surgery through holistic and personalised Ayurvedic care.",
    education:
      "Graduating as the 1st Rank Holder from Madras University in 1986, he brings unparalleled expertise in designing integrative spine treatment protocols that combine herbal formulations, Panchakarma detox therapies, physiotherapy,Â andÂ yoga.",
    languages: ["English", "Tamil", "Hindi", "Malayalam"],
  },
  {
    name: "Dr. Sridevi Rajeev",
    image: withImageKit("doctwo.jpg"),
    experience: "32 Years",
    title: "Director and Chief Physician",
    specialization: "Treatment of Musculoskeletal, Rheumatological and Developmental Disorders",
    description:
      "Dr. Sridevi Rajeev is a highly accomplished Ayurvedic physician with exceptional expertise in treating complex musculoskeletal and rheumatological conditions. Her compassionate approach and deep understanding of developmental disorders make her a trusted healer.",
    education:
      "B.A.M.S (1st Rank Holder from Mahatma Gandhi University). Fine-tuning Ayurvedic Therapies for personalized treatment protocols. Great listener and healer.",
    achievements:
      "Treated more than 3,500 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
  {
    name: "Dr. Biju Madhavan",
    image: withImageKit("docthree.jpg"),
    experience: "23 Years",
    title: "Medical Superintendent",
    specialization: "Treatment of Musculoskeletal and Neurological Disorders",
    description:
      "Dr. Biju Madhavan brings extensive expertise in integrating traditional Ayurvedic wisdom with modern medical diagnostics. His holistic approach to treating musculoskeletal and neurological disorders has helped numerous patients achieve optimal health.",
    education:
      "MD (Ayu) â€” integrates Ayurvedic treatment with modern diagnostics and therapeutic methods; a strong proponent of holisticÂ healing.",
    achievements:
      "Treated more than 5,000 IP patients with various conditions with high success rates.",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
  },
];

const KneedoctorProfile = () => <LegacyDoctorProfiles doctors={doctors} />;

export default KneedoctorProfile;
