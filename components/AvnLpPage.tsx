import AvnLpHeader from "@/components/AvnLpHeader";
import AvnLpHeroSection from "@/components/AvnLpHeroSection";
import AvnLpComparisonSection from "@/components/AvnLpComparisonSection";
import AvnLpApproachSection from "@/components/AvnLpApproachSection";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnLpYoutubePlaylist from "@/components/AvnLpYoutubePlaylist";
import AvnLpDoctorProfile from "@/components/AvnLpDoctorProfile";
import AvnLpFaqComponent from "@/components/AvnLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";
import AvnInsurancePartners from "@/components/avninsurance";

export default function AvnLpPage() {
  return (
    <main className="pt-[78px] sm:pt-[82px]">
      <AvnLpHeader />
      <AvnLpHeroSection />
      <AvnLpComparisonSection />
      <AvnLpYoutubePlaylist />
      <AvnLpDoctorProfile />
      <AvnLpApproachSection />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <AvnLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
