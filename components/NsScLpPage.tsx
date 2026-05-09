import AvnLpHeader from "@/components/AvnLpHeader";
import NsScLpHeroSection from "@/components/NsScLpHeroSection";
import NsScLpAboutSection from "@/components/NsScLpAboutSection";
import NsScLpComparisonSection from "@/components/NsScLpComparisonSection";
import NsScLpYoutubePlaylist from "@/components/NsScLpYoutubePlaylist";
import NsScLpDoctorProfile from "@/components/NsScLpDoctorProfile";
import NsScLpApproachSection from "@/components/NsScLpApproachSection";
import NsScLpHospitalAbout from "@/components/NsScLpHospitalAbout";
import AvnLpTreatmentPackage from "@/components/AvnLpTreatmentPackage";
import AvnInsurancePartners from "@/components/avninsurance";
import NsScLpFaqComponent from "@/components/NsScLpFaqComponent";
import AvnLpFooter from "@/components/AvnLpFooter";

export default function NsScLpPage() {
  return (
    <main className="overflow-x-hidden pt-[88px] sm:pt-[82px]">
      <AvnLpHeader />
      <NsScLpHeroSection />
      <NsScLpAboutSection />
      <NsScLpComparisonSection />
      <NsScLpYoutubePlaylist />
      <NsScLpDoctorProfile />
      <NsScLpApproachSection />
      <NsScLpHospitalAbout />
      <AvnLpTreatmentPackage />
      <AvnInsurancePartners />
      <NsScLpFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
