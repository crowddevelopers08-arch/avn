import KnLpPage from "@/components/KnLpPage";
import LpFormThankYouRedirect from "@/components/LpFormThankYouRedirect";

export default function KneePainTreatmentRoute() {
  return (
    <>
      {/* Mounted on the page, not the layout, so the nested /thankyou route
          doesn't inherit it. */}
      <LpFormThankYouRedirect thankYouPath="/knee-pain-treatment-with-ayurveda-treatment/thankyou" />
      <KnLpPage />
    </>
  );
}
