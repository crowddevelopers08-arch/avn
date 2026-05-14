import AvnLpHeader from "@/components/AvnLpHeader";
import AyScLpHeroSection from "@/components/AyScLpHeroSection";
import AyScLpAboutSection from "@/components/AyScLpAboutSection";
import AyScLpComparisonSection from "@/components/AyScLpComparisonSection";
import AyScLpYoutubePlaylist from "@/components/AyScLpYoutubePlaylist";
import AyScLpDoctorProfile from "@/components/AyScLpDoctorProfile";
import AyScLpApproachSection from "@/components/AyScLpApproachSection";
import AyScLpHospitalAbout from "@/components/AyScLpHospitalAbout";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import AyScLpFaqComponent from "@/components/AyScLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function AyScLpPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <AyScLpHeroSection />
      <AyScLpAboutSection />
      <AyScLpComparisonSection />
      <AyScLpYoutubePlaylist />
      <AyScLpDoctorProfile />
      <AyScLpApproachSection />
      <AyScLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <AyScLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
