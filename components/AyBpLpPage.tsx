import AvnLpFooter from "@/components/AvnLpFooter";
import AvnLpHeader from "@/components/AvnLpHeader";
import AyBpLpAboutSection from "@/components/AyBpLpAboutSection";
import AyBpLpDoctorProfile from "@/components/AyBpLpDoctorProfile";
import AyBpLpComparisonSection from "@/components/AyBpLpComparisonSection";
import AyBpLpFaqComponent from "@/components/AyBpLpFaqComponent";
import AyBpLpHeroSection from "@/components/AyBpLpHeroSection";
import AyBpLpApproachSection from "@/components/AyBpLpApproachSection";
import AyBpLpHospitalAbout from "@/components/AyBpLpHospitalAbout";
import AyBpLpInsurancePartners from "@/components/AyBpLpInsurancePartners";
import AyBpLpTreatmentPackage from "@/components/AyBpLpTreatmentPackage";
import AyBpLpYoutubePlaylist from "@/components/AyBpLpYoutubePlaylist";

export default function AyBpLpPage() {
  return (
    <main className="overflow-x-hidden pt-[88px] sm:pt-[82px]">
      <AvnLpHeader />
      <AyBpLpHeroSection />
      <AyBpLpAboutSection />
      <AyBpLpComparisonSection />
      <AyBpLpYoutubePlaylist />
      <AyBpLpDoctorProfile />
      <AyBpLpApproachSection />
      <AyBpLpHospitalAbout />
      <AyBpLpTreatmentPackage />
      <AyBpLpInsurancePartners />
      <AyBpLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
