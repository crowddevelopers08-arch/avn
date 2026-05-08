import AvnLpHeader from "@/components/AvnLpHeader";
import CsLpAboutSection from "@/components/CsLpAboutSection";
import CsLpHospitalAbout from "@/components/CsLpHospitalAbout";
import CsLpHeroSection from "@/components/CsLpHeroSection";
import CsLpComparisonSection from "@/components/CsLpComparisonSection";
import CsLpYoutubePlaylist from "@/components/CsLpYoutubePlaylist";
import CsLpDoctorProfile from "@/components/CsLpDoctorProfile";
import CsLpApproachSection from "@/components/CsLpApproachSection";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import CsLpFaqComponent from "@/components/CsLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function CsLpPage() {
  return (
    <main className="overflow-x-hidden pt-[88px] sm:pt-[82px]">
      <AvnLpHeader />
      <CsLpHeroSection />
      <CsLpAboutSection />
      <CsLpComparisonSection />
      <CsLpYoutubePlaylist />
      <CsLpDoctorProfile />
      <CsLpApproachSection />
      <CsLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <CsLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
