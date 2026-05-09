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
    condition: "Pain Management",
    benefits: [
      "Reduce pain without harmful painkillers",
      "Prevents symptoms from worsening with the use of ayurvedic herbs",
    ],
  },
  {
    condition: "Spinal Health",
    benefits: [
      "Customised treatments improve joint structure and function",
      "Restore the basic function and strength of the healthy human body",
      "Enhance mobility to do daily activities",
    ],
  },
  {
    condition: "Need for Surgery",
    benefits: [
      "Natural healing without opting for surgery",
      "Targets the root cause to provide complete relief",
    ],
  },
  {
    condition: "Mental and Emotional Stress",
    benefits: [
      "Assures a stress-free life with adequate sleep, pain relief, and improved mobility",
    ],
  },
];

export default function JpLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold leading-tight text-[#114520] sm:mb-4 sm:text-3xl lg:text-4xl xl:text-[42px]">
          Choose AVN Arogya for the Best{" "}
          <span className="text-[#f05623]">Joint Pain Treatment with Ayurveda</span>
        </h2>

        <p className="mx-auto mb-3 max-w-4xl text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl">
          Our personalized Ayurvedic regimens are tailored to your unique constitution and needs,
          ensuring sustained relief by addressing the root causes of Joint Pain rather than just
          managing symptoms.
        </p>

        <p className="mx-auto mb-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 max-[470px]:mb-4 sm:text-lg">
          Experience a holistic intervention, combining{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications, Physiotherapy,
            and Lifestyle modifications.
          </span>
        </p>

        <h3 className="mb-6 text-center text-xl font-bold text-[#114520] sm:text-2xl">
          Take the First Step Towards Joint Pain Relief
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
                    <p className="text-base font-bold text-gray-900 sm:text-lg">{row.condition}</p>
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
