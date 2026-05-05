import AvnLpHeader from "@/components/AvnLpHeader";
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
    <main>
      <AvnLpHeader />
      <CsLpHeroSection />
      <CsLpComparisonSection />
      <CsLpYoutubePlaylist />
      <CsLpDoctorProfile />
      <CsLpApproachSection />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <CsLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
