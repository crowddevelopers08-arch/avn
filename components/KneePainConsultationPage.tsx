import KneePainConsultationHeader from "@/components/KneePainConsultationHeader";
import KneePainConsultationHero from "@/components/KneePainConsultationHero";
import KneePainConsultationTestimonials from "@/components/KneePainConsultationTestimonials";
import KneePainConsultationWhoFor from "@/components/KneePainConsultationWhoFor";
import KneePainConsultationWhyChoose from "@/components/KneePainConsultationWhyChoose";
import KneePainConsultationInsurancePartners from "@/components/KneePainConsultationInsurancePartners";
import KneePainConsultationValueStack from "@/components/KneePainConsultationValueStack";
import KneePainConsultationCta from "@/components/KneePainConsultationCta";
import KneePainConsultationFooter from "@/components/KneePainConsultationFooter";

export default function KneePainConsultationPage() {
  // No overflow clipping on <main>: it would turn it into a scroll container
  // and break every `position: sticky` on the page. Sections clip their own
  // decorative blobs instead.
  return (
    <main className="min-h-screen w-full bg-[#fffaf4]">
      <KneePainConsultationHeader />

      {/* Sections 1 & 2 — positioning, the video, and the ₹150 CTA */}
      <KneePainConsultationHero />

      {/* Section 3 — real patient experiences */}
      <KneePainConsultationTestimonials />

      {/* Section 4 — who the program is for */}
      <KneePainConsultationWhoFor />

      {/* Section 5 — why choose our knee pain clinic */}
      <KneePainConsultationWhyChoose />

      {/* Section 6 — insurance & TPA partners */}
      <KneePainConsultationInsurancePartners />

      {/* Section 7 — what's included and what it costs */}
      <KneePainConsultationValueStack />

      {/* Section 8 — closing call to action */}
      <KneePainConsultationCta />

      <KneePainConsultationFooter />
    </main>
  );
}
