import AvnLpPage from "@/components/AvnLpPage";
import AvnLpLeadConversion from "@/components/AvnLpLeadConversion";
import LpFormThankYouRedirect from "@/components/LpFormThankYouRedirect";

export default function AvascularNecrosisTreatmentRoute() {
  return (
    <>
      {/* Mounted on the page, not the layout: the nested /thankyou route would
          otherwise inherit the conversion snippet and the redirect too. */}
      <AvnLpLeadConversion />
      <LpFormThankYouRedirect thankYouPath="/avascular-necrosis-treatment/thankyou" />
      <AvnLpPage />
    </>
  );
}
