import AvnLpFooter from "@/components/AvnLpFooter";
import AvnLpHeader from "@/components/AvnLpHeader";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import JpLpAboutSection from "@/components/JpLpAboutSection";
import JpLpApproachSection from "@/components/JpLpApproachSection";
import JpLpComparisonSection from "@/components/JpLpComparisonSection";
import JpLpDoctorProfile from "@/components/JpLpDoctorProfile";
import JpLpFaqComponent from "@/components/JpLpFaqComponent";
import JpLpHeroSection from "@/components/JpLpHeroSection";
import JpLpHospitalAbout from "@/components/JpLpHospitalAbout";
import JpLpYoutubePlaylist from "@/components/JpLpYoutubePlaylist";

export default function JpLpPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <JpLpHeroSection />
      <JpLpAboutSection />
      <JpLpComparisonSection />
      <JpLpYoutubePlaylist />
      <JpLpDoctorProfile />
      <JpLpApproachSection />
      <JpLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <JpLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
