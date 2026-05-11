import AvnLpFooter from "@/components/AvnLpFooter";
import AvnLpHeader from "@/components/AvnLpHeader";
import BackPainTreatmentWithoutSurgeryAboutSection from "@/components/BackPainTreatmentWithoutSurgeryAboutSection";
import BackPainTreatmentWithoutSurgeryApproachSection from "@/components/BackPainTreatmentWithoutSurgeryApproachSection";
import BackPainTreatmentWithoutSurgeryComparisonSection from "@/components/BackPainTreatmentWithoutSurgeryComparisonSection";
import BackPainTreatmentWithoutSurgeryDoctorProfile from "@/components/BackPainTreatmentWithoutSurgeryDoctorProfile";
import BackPainTreatmentWithoutSurgeryFaqComponent from "@/components/BackPainTreatmentWithoutSurgeryFaqComponent";
import BackPainTreatmentWithoutSurgeryHeroSection from "@/components/BackPainTreatmentWithoutSurgeryHeroSection";
import BackPainTreatmentWithoutSurgeryHospitalAbout from "@/components/BackPainTreatmentWithoutSurgeryHospitalAbout";
import BackPainTreatmentWithoutSurgeryInsurancePartners from "@/components/BackPainTreatmentWithoutSurgeryInsurancePartners";
import BackPainTreatmentWithoutSurgeryTreatmentPackage from "@/components/BackPainTreatmentWithoutSurgeryTreatmentPackage";
import BackPainTreatmentWithoutSurgeryYoutubePlaylist from "@/components/BackPainTreatmentWithoutSurgeryYoutubePlaylist";

export default function BackPainTreatmentWithoutSurgeryPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <BackPainTreatmentWithoutSurgeryHeroSection />
      <BackPainTreatmentWithoutSurgeryAboutSection />
      <BackPainTreatmentWithoutSurgeryComparisonSection />
      <BackPainTreatmentWithoutSurgeryYoutubePlaylist />
      <BackPainTreatmentWithoutSurgeryDoctorProfile />
      <BackPainTreatmentWithoutSurgeryApproachSection />
      <BackPainTreatmentWithoutSurgeryHospitalAbout />
      <BackPainTreatmentWithoutSurgeryTreatmentPackage />
      <BackPainTreatmentWithoutSurgeryInsurancePartners />
      <BackPainTreatmentWithoutSurgeryFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
