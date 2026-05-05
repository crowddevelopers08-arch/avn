
import Avnheader from "@/components/avnheader";
import { Avnhero } from "@/components/avnhero";
import Avnthird from "@/components/avnthird";
import AvnDoctorProfile from "@/components/avndoctor";
import AvnInsurancePartners from "@/components/avninsurance";
import AvntreatmentPackage from "@/components/avntreatment";
import AvntestimonialSection from "@/components/avntestimonial";
import AvnyoutubePlaylist from "@/components/avnyoutube";
import AvnctaSection from "@/components/avncta";
import Avnfaqcomponent from "@/components/avnfaq";
import Avnchatbot from "@/components/avnchatbot";
import { AvnLocationFooter } from "@/components/avnlocation";
import AvnFooter from "@/components/avnfooter";
import AvascularNecrosisInfo from "@/components/avnfour";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Avnheader />
        <Avnhero />
         <AvnctaSection />
             <Avnthird />
        <AvascularNecrosisInfo />
   

        <AvnDoctorProfile />
        <AvnInsurancePartners />
        <section id="learnmore">
          <AvntreatmentPackage />
        </section>
        <AvntestimonialSection />
        <AvnyoutubePlaylist />
       
        <Avnfaqcomponent />
        <Avnchatbot />
        <AvnLocationFooter />
        <AvnFooter />
      </main>
    </>
  );
}
