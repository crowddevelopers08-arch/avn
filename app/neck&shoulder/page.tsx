
import Commonfour from "@/components/commonfour"
import Commonchatbot from "@/components/commonchatbot"
import StackedScrollCards from "@/components/commonthird"
import NeckyoutubePlaylist from "@/components/neckfooter"
import Neckreviews from "@/components/neckreviews"
import { Neckhero } from "@/components/neckhero"
import Neckchatbot from "@/components/neckchatbot"
import NeckcombinedComponent from "@/components/neckcombined"
import Backthird from "@/components/backthird"
import Neckthird from "@/components/neckthird"
import Neckfour from "@/components/neckfour"
import Neckfive from "@/components/neckfive"
import Necksix from "@/components/necksix"
import Neckheader from "@/components/neckheader"
import NecktreatmentPackage from "@/components/neckreviews"
import NecktestimonialSection from "@/components/neckcombined"
import NeckctaSection from "@/components/neckcta"
import Neckfaqcomponent from "@/components/neckfaq"
import { NeckLocationFooter } from "@/components/necklocation"
import NeckFooter from "@/components/neckandshoulderfooter"

export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Neckheader />
      <Neckhero />
      <Neckthird />
      <Neckfive />
            <Necksix />
      <Neckfour />
<section id="learnmore">
      <NecktreatmentPackage />
      </section>
      <NecktestimonialSection />
      <NeckyoutubePlaylist />
      <NeckctaSection />
      <Neckfaqcomponent />
      <Neckchatbot />
      <NeckLocationFooter />
      <NeckFooter />
    </main>
    </>
  )
}
