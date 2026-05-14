import AvnLpHeader from "@/components/AvnLpHeader";
import ScLpAboutSection from "@/components/ScLpAboutSection";
import ScLpHospitalAbout from "@/components/ScLpHospitalAbout";
import ScLpHeroSection from "@/components/ScLpHeroSection";
import ScLpComparisonSection from "@/components/ScLpComparisonSection";
import ScLpYoutubePlaylist from "@/components/ScLpYoutubePlaylist";
import ScLpDoctorProfile from "@/components/ScLpDoctorProfile";
import ScLpApproachSection from "@/components/ScLpApproachSection";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import ScLpFaqComponent from "@/components/ScLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function ScLpPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <ScLpHeroSection />
      <ScLpAboutSection />
      <ScLpComparisonSection />
      <ScLpYoutubePlaylist />
      <ScLpDoctorProfile />
      <ScLpApproachSection />
      <ScLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <ScLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
