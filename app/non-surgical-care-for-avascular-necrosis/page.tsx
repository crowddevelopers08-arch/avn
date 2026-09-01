import NonSurgicalCareForAvascularNecrosisPage from "@/components/NonSurgicalCareForAvascularNecrosisPage";
import NonSurgicalCareForAvascularNecrosisLeadConversion from "@/components/NonSurgicalCareForAvascularNecrosisLeadConversion";

export default function NonSurgicalCareForAvascularNecrosisRoute() {
  return (
    <>
      {/* Mounted on the page, not the layout: the nested /thankyou route would
          otherwise inherit the conversion snippet too. */}
      <NonSurgicalCareForAvascularNecrosisLeadConversion />
      <NonSurgicalCareForAvascularNecrosisPage />
    </>
  );
}
