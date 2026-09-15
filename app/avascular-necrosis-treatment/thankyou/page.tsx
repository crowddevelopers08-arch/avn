import AvnLpThankYou from "@/components/AvnLpThankYou";

export default function AvascularNecrosisTreatmentThankYouRoute() {
  return (
    <AvnLpThankYou
      landingPage="/avascular-necrosis-treatment"
      // Same AVN thank-you conversion as /thankyou-avn — swap for a dedicated label if one is created.
      conversionSendTo="AW-947598506/BktGCIXx7MIbEKrp7MMD"
      condition="AVN"
      checklist={[
        "Your most recent MRI or X-ray of the affected joint",
        "The grade / stage of AVN, if a doctor has told you",
        "A list of medicines you are currently taking",
        "Anything a previous doctor or surgeon has already advised",
      ]}
      privacyPolicy="/privacy-policy-avn"
    />
  );
}
