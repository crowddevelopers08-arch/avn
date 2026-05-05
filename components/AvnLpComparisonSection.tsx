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

export default function AvnLpComparisonSection() {
  return (
    <section className="section-wash bg-[var(--avn-cream)] px-4 py-7 max-[470px]:py-4 sm:py-12">
      <div className="section-content max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] text-center leading-tight mb-3 sm:mb-4">
          <span className="block sm:inline">Don&apos;t Delay Your Treatment</span>{" "}
          <span className="block sm:inline">
            For <span className="text-[#f05623]">AVN</span>
          </span>
        </h2>

        <p className="text-center font-bold text-gray-800 mb-3 max-w-4xl mx-auto text-lg sm:text-xl leading-snug">
          With AVN Arogya Holistic Ayurvedic Treatment, preserve your mobility, enhance
          your joint functions and Reduce chronic pains with the Holistic Ayurvedic
          Treatment we offer at our Ayurvedic Hospital.
        </p>

        <p className="text-center text-gray-700 mb-6 max-[470px]:mb-4 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          We follow a comprehensive and holistic intervention that includes{" "}
          <span className="text-[#D94E1A]">
            Ayurvedic Panchakarma Therapies, Ayurvedic Medications,
            Physiotherapy, Dietary adjustments and Lifestyle modifications.
          </span>
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#d9d1c4] bg-white/90 shadow-[0_18px_45px_rgba(17,69,32,0.08)] backdrop-blur-sm">
          <table className="w-full min-w-[760px] border-collapse text-base">
          <thead>
            <tr style={{ backgroundColor: "#F5D5C5" }}>
              <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                Your Current AVN Condition
              </th>
              <th className="w-1/2 border border-gray-300 px-5 py-3 text-left text-base font-semibold text-gray-800 sm:px-8 sm:text-lg">
                With Treatment At AVN Arogya
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="align-top">
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                  Pain and Discomfort :
                </p>
                <p className="text-[#C0471F] leading-relaxed text-base">
                  Mild to severe pain which interferes with daily activities and reduces
                  the quality of life.
                </p>
              </td>
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      <span className="text-[#D94E1A] font-semibold">
                        Significant reduction in Pain
                      </span>{" "}
                      after our treatment
                    </span>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      No need for ongoing harmful painkillers
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="align-top">
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                  Limited Mobility :
                </p>
                <p className="text-[#C0471F] leading-relaxed text-base">
                  As the disease progresses, joint function can be compromised,
                  especially if the affected bone is near a joint such as the hip or knee.
                  This can lead to difficulty in walking or performing routine tasks.
                </p>
              </td>
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Helps preserve joint{" "}
                      <span className="font-semibold">structure</span> and{" "}
                      <span className="font-semibold">function</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Improved ability to walk, climb stairs, drive, and work
                    </span>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Arrest the progress of the disease
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="align-top">
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                  Need for Surgery :
                </p>
                <p className="text-[#C0471F] leading-relaxed text-base">
                  In many cases, as AVN progresses, surgery (like bone grafts or joint
                  replacement) may become necessary to restore function or relieve pain.
                  Surgery comes with its own set of challenges, including potential
                  complications and recovery time.
                </p>
              </td>
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Recover naturally, without surgery
                    </span>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Address the root cause of the condition while providing
                      comprehensive relief
                    </span>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Possibility of disease reversal
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="align-top">
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <p className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                  Mental and Emotional Strain :
                </p>
                <p className="text-[#C0471F] leading-relaxed text-base">
                  Living with a chronic condition can be stressful. The constant pain and
                  mobility challenges can lead to feelings of frustration, depression, or
                  anxiety.
                </p>
              </td>
              <td className="w-1/2 border border-gray-300 px-5 py-3 sm:px-8">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-start gap-3 py-2">
                    <CircleCheck />
                    <span className="text-base leading-snug">
                      Enhanced sleep quality, pain relief, and mobility leads to better
                      energy levels and a stress-free life
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
