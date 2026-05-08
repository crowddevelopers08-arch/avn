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
    condition: "Pain Management",
    benefits: [
      "Reduce pain without harmful painkillers",
      "Prevents symptoms from worsening with the use of ayurvedic herbs",
    ],
  },
  {
    condition: "Spinal Health",
    benefits: [
      "Customised treatments improve spinal structure and function",
      "Restore the basic function and strength of the healthy human body",
      "Enhance mobility to do daily activities",
    ],
  },
  {
    condition: "Need for Surgery",
    benefits: [
      "Relieve knee pain with natural healing and without surgery",
      "Targets the root cause to guarantee complete relief.",
    ],
  },
  {
    condition: "Mental and Emotional Stress",
    benefits: [
      "Guarantees a stress-free life with adequate sleep, pain relief, and improved mobility",
    ],
  },
];

export default function KnLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] text-center leading-tight mb-3 sm:mb-4">
          Choose AVN Arogya for the Best{" "}
          <span className="text-[#f05623]">Knee Pain Treatment with Ayurveda Treatment</span>
        </h2>

        <p className="text-center font-bold text-gray-800 mb-3 max-w-4xl mx-auto text-lg sm:text-xl leading-snug">
          Our personalized Ayurvedic regimens are tailored to your unique constitution
          and needs, ensuring sustained relief by addressing the root causes of knee pain
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
          Take the First Step Toward Knee Pain Relief
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-[#d9d1c4] bg-white/90 shadow-[0_18px_45px_rgba(17,69,32,0.08)] backdrop-blur-sm">
          <table className="w-full min-w-[760px] border-collapse text-base">
            <thead>
              <tr style={{ backgroundColor: "#F5D5C5" }}>
                <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                  Your current condition
                </th>
                <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                  Treatment Benefits at AVN Arogya
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.condition} className="align-top">
                  <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                      {row.condition}
                    </p>
                  </td>
                  <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                    <div className="flex flex-col divide-y divide-gray-200">
                      {row.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 py-2">
                          <CircleCheck />
                          <span className="text-base leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
