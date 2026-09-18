import BackPainSciaticaConsultationPage from "@/components/BackPainSciaticaConsultationPage";
import BackPainSciaticaConsultationLeadConversion from "@/components/BackPainSciaticaConsultationLeadConversion";

export default function DirectConsultationBackPainSciaticaRoute() {
  return (
    <>
      {/* Mounted on the page, not the layout: the nested /thankyou route would
          otherwise inherit the conversion snippet too. */}
      <BackPainSciaticaConsultationLeadConversion />
      <BackPainSciaticaConsultationPage />
    </>
  );
}
