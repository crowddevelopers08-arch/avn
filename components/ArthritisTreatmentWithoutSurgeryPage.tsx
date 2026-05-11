import AvnLpFooter from "@/components/AvnLpFooter";
import AvnLpHeader from "@/components/AvnLpHeader";
import ArthritisTreatmentWithoutSurgeryAboutSection from "@/components/ArthritisTreatmentWithoutSurgeryAboutSection";
import ArthritisTreatmentWithoutSurgeryApproachSection from "@/components/ArthritisTreatmentWithoutSurgeryApproachSection";
import ArthritisTreatmentWithoutSurgeryComparisonSection from "@/components/ArthritisTreatmentWithoutSurgeryComparisonSection";
import ArthritisTreatmentWithoutSurgeryDoctorProfile from "@/components/ArthritisTreatmentWithoutSurgeryDoctorProfile";
import ArthritisTreatmentWithoutSurgeryFaqComponent from "@/components/ArthritisTreatmentWithoutSurgeryFaqComponent";
import ArthritisTreatmentWithoutSurgeryHeroSection from "@/components/ArthritisTreatmentWithoutSurgeryHeroSection";
import ArthritisTreatmentWithoutSurgeryHospitalAbout from "@/components/ArthritisTreatmentWithoutSurgeryHospitalAbout";
import ArthritisTreatmentWithoutSurgeryInsurancePartners from "@/components/ArthritisTreatmentWithoutSurgeryInsurancePartners";
import ArthritisTreatmentWithoutSurgeryTreatmentPackage from "@/components/ArthritisTreatmentWithoutSurgeryTreatmentPackage";
import ArthritisTreatmentWithoutSurgeryYoutubePlaylist from "@/components/ArthritisTreatmentWithoutSurgeryYoutubePlaylist";

export default function ArthritisTreatmentWithoutSurgeryPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <ArthritisTreatmentWithoutSurgeryHeroSection />
      <ArthritisTreatmentWithoutSurgeryAboutSection />
      <ArthritisTreatmentWithoutSurgeryComparisonSection />
      <ArthritisTreatmentWithoutSurgeryYoutubePlaylist />
      <ArthritisTreatmentWithoutSurgeryDoctorProfile />
      <ArthritisTreatmentWithoutSurgeryApproachSection />
      <ArthritisTreatmentWithoutSurgeryHospitalAbout />
      <ArthritisTreatmentWithoutSurgeryTreatmentPackage />
      <ArthritisTreatmentWithoutSurgeryInsurancePartners />
      <ArthritisTreatmentWithoutSurgeryFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
