import { ResponsiveComparisonTable } from "@/components/shared/ResponsiveComparisonSection";

function CircleCheck() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0"
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
    condition: "Persistent Back Pain",
    benefits: [
      "Notable reduction in persistent back pain",
      "Elimination or reduction in the need for continuous pain relief medication",
    ],
  },
  {
    condition: "Limited Range of Motion",
    benefits: [
      "Improved joint flexibility and functional movement",
      "Increased capability for daily activities and work",
      "Halting or slowing down the progression of the condition",
    ],
  },
  {
    condition: "Avoiding Surgical Options",
    benefits: [
      "Natural recovery, bypassing the necessity for surgery",
      "Addressing the core issue while providing comprehensive relief",
      "Potential reversal of the condition's advancement",
    ],
  },
  {
    condition: "Emotional and Mental Strain",
    benefits: [
      "Enhanced sleep quality, reduced pain, improved mobility, leading to better mental and emotional well-being",
    ],
  },
];

export default function AyBpLpComparisonSection() {
  return (
    <section className="bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold leading-tight text-[#114520] sm:mb-4 sm:text-3xl lg:text-4xl xl:text-[42px]">
          Choose AVN Arogya for the Best{" "}
          <span className="text-[#f05623]">Ayurvedic Back Pain Treatment</span>
        </h2>

        <p className="mx-auto mb-3 max-w-4xl text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl">
          Our personalized Ayurvedic regimens are tailored to your unique constitution and needs, ensuring sustained relief by addressing the root causes of a bulging disc rather than just managing symptoms.
        </p>

        <p className="mx-auto mb-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 max-[470px]:mb-4 sm:text-lg">
          Experience a holistic intervention, combining{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications, Physiotherapy, and Lifestyle modifications.
          </span>
        </p>

        <h3 className="mb-6 text-center text-xl font-bold text-[#114520] sm:text-2xl">
          Take the First Step Towards Back pain Relief
        </h3>

        <ResponsiveComparisonTable
          leftHeader="Your Current Condition"
          rightHeader="Treatment Benefits at AVN Arogya"
          rows={comparisonRows}
        />
      </div>
    </section>
  );
}
