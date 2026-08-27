import NonSurgicalCareForAvascularNecrosisHeader from "@/components/NonSurgicalCareForAvascularNecrosisHeader";
import NonSurgicalCareForAvascularNecrosisHero from "@/components/NonSurgicalCareForAvascularNecrosisHero";
import NonSurgicalCareForAvascularNecrosisTestimonials from "@/components/NonSurgicalCareForAvascularNecrosisTestimonials";
import NonSurgicalCareForAvascularNecrosisWhoFor from "@/components/NonSurgicalCareForAvascularNecrosisWhoFor";
import NonSurgicalCareForAvascularNecrosisWhyChoose from "@/components/NonSurgicalCareForAvascularNecrosisWhyChoose";
import NonSurgicalCareForAvascularNecrosisValueStack from "@/components/NonSurgicalCareForAvascularNecrosisValueStack";
import NonSurgicalCareForAvascularNecrosisCta from "@/components/NonSurgicalCareForAvascularNecrosisCta";
import NonSurgicalCareForAvascularNecrosisFooter from "@/components/NonSurgicalCareForAvascularNecrosisFooter";
import NonSurgicalCareForAvascularNecrosisInsurancePartners from "./NonSurgicalCareForAvascularNecrosisInsurancePartners";

export default function NonSurgicalCareForAvascularNecrosisPage() {
  // No overflow clipping on <main>: it would turn it into a scroll container
  // and break every `position: sticky` on the page. Sections clip their own
  // decorative blobs instead.
  return (
    <main className="min-h-screen w-full bg-[#fffaf4]">
      <NonSurgicalCareForAvascularNecrosisHeader />

      {/* Sections 1 & 2 — positioning, the video, and the ₹150 CTA */}
      <NonSurgicalCareForAvascularNecrosisHero />

      {/* Section 3 — real patient experiences */}
      <NonSurgicalCareForAvascularNecrosisTestimonials />

      {/* Section 4 — who the program is for */}
      <NonSurgicalCareForAvascularNecrosisWhoFor />

      {/* Section 5 — why choose our AVN clinic */}
      <NonSurgicalCareForAvascularNecrosisWhyChoose />
      <NonSurgicalCareForAvascularNecrosisInsurancePartners />

      {/* Section 7 — what's included and what it costs */}
      <NonSurgicalCareForAvascularNecrosisValueStack />

      {/* Section 8 — closing call to action */}
      <NonSurgicalCareForAvascularNecrosisCta />

      <NonSurgicalCareForAvascularNecrosisFooter />
    </main>
  );
}
