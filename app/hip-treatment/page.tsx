
import { Hiphero } from "@/components/commonhero"
import { HipLocationFooter } from "@/components/commonmap"
import Hipthird from "@/components/commonfour"
import Hipfour from "@/components/commonthird"
import HipDoctorProfile from "@/components/commonfive"
import HipInsurancePartners from "@/components/commonreview"
import HiptreatmentPackage from "@/components/commonvideo"
import HiptestimonialSection from "@/components/hiptestimonial"
import HipyoutubePlaylist from "@/components/hipyoutube"
import HipctaSection from "@/components/hipcta"
import Hipfaqcomponent from "@/components/hipfaq"
import Hipchatbot from "@/components/commonchatbot"
import HipFooter from "@/components/hipfooter"
import Hipheader from "@/components/commonheader"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Hipheader />
      <Hiphero />
      <Hipthird />
      <Hipfour />
      <HipDoctorProfile />
      <HipInsurancePartners /> 
      <section id="learnmore">
      <HiptreatmentPackage /> 
      </section>
      <HiptestimonialSection />
      <HipyoutubePlaylist />
      <HipctaSection />
      <Hipfaqcomponent />
      <Hipchatbot />
      <HipLocationFooter />
      <HipFooter />
    </main>
    </>
  )
}
