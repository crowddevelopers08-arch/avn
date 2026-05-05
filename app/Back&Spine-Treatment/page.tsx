import { Backhero } from "@/components/backhero";
import Backreviews from "@/components/backreviews";
import Backthird from "@/components/backthird";
import BackcombinedComponent from "@/components/CTASection";
import Backcenterimg from "@/components/backcenterimg";
import Backfour from "@/components/backfour";
import Backsix from "@/components/backsix";
import WhatSetsUsApart from "@/components/Backfaq";
import Backchatbot from "@/components/backchatbot";
import Backheader from "@/components/backheader";
import Backfaqcomponent from "@/components/Backfaq";
import CTASection from "@/components/CTASection";
import BackFooter from "@/components/backfooter";;
import TreatmentPackage from "@/components/backnine";
import BackyoutubePlaylist from "@/components/backyoutube";
import { BackLocationFooter } from "@/components/backlocation";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Backheader />
        <Backhero />

        <Backsix />
        <section id="treatments">
          <Backthird />
        </section>
        <Backfour />

        <Backcenterimg />
        <TreatmentPackage />
        <section id="reviews">
          <Backreviews />
        </section>
        <BackyoutubePlaylist />
        <section id="contacts">
          <CTASection />
        </section>
        <Backfaqcomponent />
        <Backchatbot />
        <BackLocationFooter />
        <BackFooter />
      </main>
    </>
  );
}
