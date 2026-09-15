import AvnLpThankYou from "@/components/AvnLpThankYou";

export default function KneePainTreatmentThankYouRoute() {
  return (
    <AvnLpThankYou
      landingPage="/knee-pain-treatment-with-ayurveda-treatment"
      // Same knee thank-you conversion as /thankyou-knee — swap for a dedicated label if one is created.
      conversionSendTo="AW-947598506/LK-VCJq15MIbEKrp7MMD"
      condition="knee pain"
      checklist={[
        "Your most recent X-ray or MRI of the knee",
        "A list of medicines you are currently taking",
        "How long you have had the pain, and what makes it worse",
        "Anything a previous doctor or surgeon has already advised",
      ]}
      privacyPolicy="/privacy-policy-knee"
    />
  );
}
