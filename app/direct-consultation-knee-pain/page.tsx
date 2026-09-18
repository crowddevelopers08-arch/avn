import KneePainConsultationPage from "@/components/KneePainConsultationPage";
import KneePainConsultationLeadConversion from "@/components/KneePainConsultationLeadConversion";

export default function DirectConsultationKneePainRoute() {
  return (
    <>
      {/* Mounted on the page, not the layout: the nested /thankyou route would
          otherwise inherit the conversion snippet too. */}
      <KneePainConsultationLeadConversion />
      <KneePainConsultationPage />
    </>
  );
}


// deploy 