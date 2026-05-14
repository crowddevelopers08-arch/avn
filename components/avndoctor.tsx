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
];

const AvnDoctorProfile = () => <LegacyDoctorProfiles doctors={doctors} />;

export default AvnDoctorProfile;
