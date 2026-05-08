import AvnLpHeader from "@/components/AvnLpHeader";
import HdLpAboutSection from "@/components/HdLpAboutSection";
import HdLpHospitalAbout from "@/components/HdLpHospitalAbout";
import HdLpHeroSection from "@/components/HdLpHeroSection";
import HdLpComparisonSection from "@/components/HdLpComparisonSection";
import HdLpYoutubePlaylist from "@/components/HdLpYoutubePlaylist";
import HdLpDoctorProfile from "@/components/HdLpDoctorProfile";
import HdLpApproachSection from "@/components/HdLpApproachSection";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import HdLpFaqComponent from "@/components/HdLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function HdLpPage() {
  return (
    <main className="pt-[78px] sm:pt-[82px]">
      <AvnLpHeader />
      <HdLpHeroSection />
      <HdLpAboutSection />
      <HdLpComparisonSection />
      <HdLpYoutubePlaylist />
      <HdLpDoctorProfile />
      <HdLpApproachSection />
      <HdLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <HdLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
