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
