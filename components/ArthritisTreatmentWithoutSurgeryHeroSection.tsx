const heroBullets = [
  "Rely on our 90+ years of expertise spanning 4 generations",
  "Join the 1 lakh+ patients who have successfully benefited from our treatment",
  "Get free from the pain and discomfort of Arthritis without resorting to surgery",
  "Rediscover the joy of a pain-free and active life",
  "Avail cashless treatment at our NABH Certified Hospital",
];

export default function ArthritisTreatmentWithoutSurgeryHeroSection() {
  return (
    <section id="appointment-form" className="flex flex-col lg:min-h-[580px] lg:flex-row">
      <div className="bg-[#F0DDD3] px-4 pt-10 max-[470px]:pt-6 text-center sm:px-6 lg:hidden">
        <div className="mx-auto max-w-[520px]">
          <h1 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            Proven relief from Arthritis without surgery
          </h1>
        </div>
      </div>

      <div
        className="flex items-center justify-center px-4 py-7 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{ backgroundColor: "#D94E1A", flex: "0 0 54%" }}
      >
        <div className="mt-2 w-full max-w-[680px] overflow-hidden bg-white shadow-2xl sm:mt-6 lg:mt-8">
          <iframe
            aria-label="Fix your Appointment"
            frameBorder="0"
            className="block h-[460px] w-full border-0 sm:h-[500px]"
            src="https://forms.zohopublic.in/org60008244182/form/FixyourAppointment/formperma/U_iaPI1w5ybeZDxIn_6Z2PB5iO-1d-GM4Vp7VwNaSTU"
          />
        </div>
      </div>

      <div
        className="flex items-center px-4 py-10 max-[470px]:py-6 text-center sm:px-6 lg:px-10 lg:text-left xl:px-12"
        style={{ backgroundColor: "#F0DDD3", flex: "0 0 46%" }}
      >
        <div className="mx-auto max-w-[480px] lg:max-w-[520px]">
          <h1 className="mb-4 hidden text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:text-[2.65rem] lg:block">
            Proven relief from Arthritis without surgery
          </h1>
          <p className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg">
            Experience the power of natural healing with personalized Ayurvedic treatments at AVN Arogya.
          </p>
          <ul className="space-y-2 text-left">
            {heroBullets.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-gray-800 sm:text-base">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#f05623]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
