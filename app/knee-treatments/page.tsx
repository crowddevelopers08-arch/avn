
import { Kneehero } from "@/components/hero-section"
import KneeFooter from "@/components/footer"
import Kneeheader from "@/components/kneeheader"
import KneenewFeatures from "@/components/about-section"
import KneeCardGrid from "@/components/fisness"
import KneedoctorProfile from "@/components/consultation-section"
import KneeInsurancePartners from "@/components/scrollstak"
import KneeTreatmentPackage from "@/components/expertssection"
import KneeTestimonialSection from "@/components/combinebanmap"
import KneeyoutubePlaylist from "@/components/kneeyoutube"
import KneeCTASection from "@/components/kneecta"
import Kneefaqcomponent from "@/components/Kneefaq"
import Kneechatbot from "@/components/chatbot"
import { KneeLocationFooter } from "@/components/kneelocation"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
        <Kneeheader />
      <Kneehero />
      <KneenewFeatures />
      <KneeCardGrid />
      <KneedoctorProfile />
      <KneeInsurancePartners />
      <KneeTreatmentPackage />
      <KneeTestimonialSection />
      <KneeyoutubePlaylist />
      <KneeCTASection />
      <Kneefaqcomponent />
      <Kneechatbot />
      <KneeLocationFooter />
     <KneeFooter />
    </main>
    </>
  )
}
