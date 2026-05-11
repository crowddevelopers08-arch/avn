import AvnLpFooter from "@/components/AvnLpFooter";
import AvnLpHeader from "@/components/AvnLpHeader";
import ArthritisTreatmentWithAyurvedaAboutSection from "@/components/ArthritisTreatmentWithAyurvedaAboutSection";
import ArthritisTreatmentWithAyurvedaApproachSection from "@/components/ArthritisTreatmentWithAyurvedaApproachSection";
import ArthritisTreatmentWithAyurvedaComparisonSection from "@/components/ArthritisTreatmentWithAyurvedaComparisonSection";
import ArthritisTreatmentWithAyurvedaDoctorProfile from "@/components/ArthritisTreatmentWithAyurvedaDoctorProfile";
import ArthritisTreatmentWithAyurvedaFaqComponent from "@/components/ArthritisTreatmentWithAyurvedaFaqComponent";
import ArthritisTreatmentWithAyurvedaHeroSection from "@/components/ArthritisTreatmentWithAyurvedaHeroSection";
import ArthritisTreatmentWithAyurvedaHospitalAbout from "@/components/ArthritisTreatmentWithAyurvedaHospitalAbout";
import ArthritisTreatmentWithAyurvedaInsurancePartners from "@/components/ArthritisTreatmentWithAyurvedaInsurancePartners";
import ArthritisTreatmentWithAyurvedaTreatmentPackage from "@/components/ArthritisTreatmentWithAyurvedaTreatmentPackage";
import ArthritisTreatmentWithAyurvedaYoutubePlaylist from "@/components/ArthritisTreatmentWithAyurvedaYoutubePlaylist";

export default function ArthritisTreatmentWithAyurvedaPage() {
  return (
    <main className="overflow-x-hidden pt-[56px] sm:pt-[82px]">
      <AvnLpHeader />
      <ArthritisTreatmentWithAyurvedaHeroSection />
      <ArthritisTreatmentWithAyurvedaAboutSection />
      <ArthritisTreatmentWithAyurvedaComparisonSection />
      <ArthritisTreatmentWithAyurvedaYoutubePlaylist />
      <ArthritisTreatmentWithAyurvedaDoctorProfile />
      <ArthritisTreatmentWithAyurvedaApproachSection />
      <ArthritisTreatmentWithAyurvedaHospitalAbout />
      <ArthritisTreatmentWithAyurvedaTreatmentPackage />
      <ArthritisTreatmentWithAyurvedaInsurancePartners />
      <ArthritisTreatmentWithAyurvedaFaqComponent />
      <AvnLpFooter />
    </main>
  );
}
