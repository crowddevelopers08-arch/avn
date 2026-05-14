import { ResponsiveComparisonTable } from "@/components/shared/ResponsiveComparisonSection";

function CircleCheck() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D94E1A"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

const comparisonRows = [
  {
    condition: "Pain and Discomfort",
    benefits: [
      "Significant reduction in pain after our treatment",
      "No need for ongoing harmful painkillers.",
    ],
  },
  {
    condition: "Limited Mobility",
    benefits: [
      "Helps improve joint structure and function",
      "Enhanced ability to walk, climb stairs, drive, and work.",
      "Arrest the progress of the disease.",
    ],
  },
  {
    condition: "Need for Surgery",
    benefits: [
      "Recover naturally, without the need for surgery",
      "Addresses the root cause of the condition while providing comprehensive relief.",
      "Possibility of disease reversal.",
    ],
  },
  {
    condition: "Mental and Emotional Strain",
    benefits: [
      "Enhanced sleep quality, pain relief, and improved mobility lead to better energy levels and a stress-free life.",
    ],
  },
];

export default function NsScLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] text-center leading-tight mb-3 sm:mb-4">
          Choose the Best{" "}
          <span className="text-[#f05623]">Sciatica Treatment without Surgery</span>{" "}
          at AVN Arogya
        </h2>

        <p className="text-center font-bold text-gray-800 mb-3 max-w-4xl mx-auto text-lg sm:text-xl leading-snug">
          Ayurveda offers personalized therapeutic regimens, crafted to match your unique
          constitution and needs. This ensures deeper, sustainable relief, addressing the
          root causes of sciatica, rather than just managing the symptoms.
        </p>

        <p className="text-center text-gray-700 mb-6 max-[470px]:mb-4 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          We follow a comprehensive and holistic intervention that includes{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications, Physiotherapy,
            Dietary adjustments and Lifestyle modifications.
          </span>
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#114520] text-center mb-6">
          Take the First Step Towards Sciatica Relief
        </h3>

        <ResponsiveComparisonTable
          leftHeader="Your current condition"
          rightHeader="Treatment Benefits at AVN Arogya"
          rows={comparisonRows}
        />
      </div>
    </section>
  );
}
