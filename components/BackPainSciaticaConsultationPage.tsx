import BackPainSciaticaConsultationHeader from "@/components/BackPainSciaticaConsultationHeader";
import BackPainSciaticaConsultationHero from "@/components/BackPainSciaticaConsultationHero";
import BackPainSciaticaConsultationTestimonials from "@/components/BackPainSciaticaConsultationTestimonials";
import BackPainSciaticaConsultationWhoFor from "@/components/BackPainSciaticaConsultationWhoFor";
import BackPainSciaticaConsultationWhyChoose from "@/components/BackPainSciaticaConsultationWhyChoose";
import BackPainSciaticaConsultationInsurancePartners from "@/components/BackPainSciaticaConsultationInsurancePartners";
import BackPainSciaticaConsultationValueStack from "@/components/BackPainSciaticaConsultationValueStack";
import BackPainSciaticaConsultationCta from "@/components/BackPainSciaticaConsultationCta";
import BackPainSciaticaConsultationFooter from "@/components/BackPainSciaticaConsultationFooter";

export default function BackPainSciaticaConsultationPage() {
  // No overflow clipping on <main>: it would turn it into a scroll container
  // and break every `position: sticky` on the page. Sections clip their own
  // decorative blobs instead.
  return (
    <main className="min-h-screen w-full bg-[#fffaf4]">
      <BackPainSciaticaConsultationHeader />

      {/* Sections 1 & 2 — positioning, the video, and the ₹150 CTA */}
      <BackPainSciaticaConsultationHero />

      {/* Section 3 — real patient experiences */}
      <BackPainSciaticaConsultationTestimonials />

      {/* Section 4 — who the program is for */}
      <BackPainSciaticaConsultationWhoFor />

      {/* Section 5 — why choose our back pain clinic */}
      <BackPainSciaticaConsultationWhyChoose />

      {/* Section 6 — insurance & TPA partners */}
      <BackPainSciaticaConsultationInsurancePartners />

      {/* Section 7 — what's included and what it costs */}
      <BackPainSciaticaConsultationValueStack />

      {/* Section 8 — closing call to action */}
      <BackPainSciaticaConsultationCta />

      <BackPainSciaticaConsultationFooter />
    </main>
  );
}
