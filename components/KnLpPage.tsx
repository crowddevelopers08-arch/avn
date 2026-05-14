import AvnLpHeader from "@/components/AvnLpHeader";
import KnLpAboutSection from "@/components/KnLpAboutSection";
import KnLpHospitalAbout from "@/components/KnLpHospitalAbout";
import KnLpHeroSection from "@/components/KnLpHeroSection";
import KnLpComparisonSection from "@/components/KnLpComparisonSection";
import KnLpYoutubePlaylist from "@/components/KnLpYoutubePlaylist";
import KnLpDoctorProfile from "@/components/KnLpDoctorProfile";
import KnLpApproachSection from "@/components/KnLpApproachSection";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import KnLpFaqComponent from "@/components/KnLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function KnLpPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <KnLpHeroSection />
      <KnLpAboutSection />
      <KnLpComparisonSection />
      <KnLpYoutubePlaylist />
      <KnLpDoctorProfile />
      <KnLpApproachSection />
      <KnLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <KnLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
