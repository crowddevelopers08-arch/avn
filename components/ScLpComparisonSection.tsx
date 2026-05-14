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
    condition: "Nerve Pain Relief",
    benefits: [
      "Reduce sciatic nerve pain without harmful painkillers",
      "Prevents nerve irritation from worsening with the use of ayurvedic herbs",
    ],
  },
  {
    condition: "Mobility & Function",
    benefits: [
      "Customised treatments improve spinal and nerve function",
      "Restore the basic movement and strength of the lower back and legs",
      "Enhance mobility to perform daily activities without pain",
    ],
  },
  {
    condition: "Need for Surgery",
    benefits: [
      "Natural healing without opting for surgery",
      "Targets the root cause of sciatic nerve compression for complete relief",
    ],
  },
  {
    condition: "Mental and Emotional Stress",
    benefits: [
      "Assures a stress-free life with adequate sleep, pain relief, and improved mobility",
    ],
  },
];

export default function ScLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] text-center leading-tight mb-3 sm:mb-4">
          Choose AVN Arogya for the Best{" "}
          <span className="text-[#f05623]">Sciatica Treatment with Ayurveda</span>
        </h2>

        <p className="text-center font-bold text-gray-800 mb-3 max-w-4xl mx-auto text-lg sm:text-xl leading-snug">
          Our personalized Ayurvedic regimens are tailored to your unique constitution
          and needs, ensuring sustained relief by addressing the root causes of sciatica
          rather than just managing symptoms.
        </p>

        <p className="text-center text-gray-700 mb-6 max-[470px]:mb-4 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          Experience a holistic intervention, combining{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications, Physiotherapy,
            and Lifestyle modifications.
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
