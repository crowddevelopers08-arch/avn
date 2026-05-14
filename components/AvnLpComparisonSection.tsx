import { ResponsiveComparisonTable } from "@/components/shared/ResponsiveComparisonSection";

const comparisonRows = [
  {
    condition: "Pain and Discomfort :",
    conditionDescription:
      "Mild to severe pain which interferes with daily activities and reduces the quality of life.",
    benefits: [
      <>
        <span className="font-semibold text-[#D94E1A]">Significant reduction in Pain</span>{" "}
        after our treatment
      </>,
      "No need for ongoing harmful painkillers",
    ],
  },
  {
    condition: "Limited Mobility :",
    conditionDescription:
      "As the disease progresses, joint function can be compromised, especially if the affected bone is near a joint such as the hip or knee. This can lead to difficulty in walking or performing routine tasks.",
    benefits: [
      <>
        Helps preserve joint <span className="font-semibold">structure</span> and{" "}
        <span className="font-semibold">function</span>
      </>,
      "Improved ability to walk, climb stairs, drive, and work",
      "Arrest the progress of the disease",
    ],
  },
  {
    condition: "Need for Surgery :",
    conditionDescription:
      "In many cases, as AVN progresses, surgery (like bone grafts or joint replacement) may become necessary to restore function or relieve pain. Surgery comes with its own set of challenges, including potential complications and recovery time.",
    benefits: [
      "Recover naturally, without surgery",
      "Address the root cause of the condition while providing comprehensive relief",
      "Possibility of disease reversal",
    ],
  },
  {
    condition: "Mental and Emotional Strain :",
    conditionDescription:
      "Living with a chronic condition can be stressful. The constant pain and mobility challenges can lead to feelings of frustration, depression, or anxiety.",
    benefits: [
      "Enhanced sleep quality, pain relief, and mobility leads to better energy levels and a stress-free life",
    ],
  },
];

export default function AvnLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold leading-tight text-[#114520] sm:mb-4 sm:text-3xl lg:text-4xl xl:text-[42px]">
          <span className="block sm:inline">Don&apos;t Delay Your Treatment</span>{" "}
          <span className="block sm:inline">
            For <span className="text-[#f05623]">AVN</span>
          </span>
        </h2>

        <p className="mx-auto mb-3 max-w-4xl text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl">
          With AVN Arogya Holistic Ayurvedic Treatment, preserve your mobility, enhance your
          joint functions and Reduce chronic pains with the Holistic Ayurvedic Treatment we
          offer at our Ayurvedic Hospital.
        </p>

        <p className="mx-auto mb-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 max-[470px]:mb-4 sm:text-lg">
          We follow a comprehensive and holistic intervention that includes{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications, Physiotherapy, Dietary
            adjustments and Lifestyle modifications.
          </span>
        </p>

        <ResponsiveComparisonTable
          leftHeader="Your Current AVN Condition"
          rightHeader="With Treatment At AVN Arogya"
          rows={comparisonRows}
        />
      </div>
    </section>
  );
}
