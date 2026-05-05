export default function CsLpHeroSection() {
  return (
    <section id="appointment-form" className="flex flex-col lg:min-h-[580px] lg:flex-row">
      <div className="bg-[#F0DDD3] px-4 pt-10 max-[470px]:pt-6 text-center sm:px-6 lg:hidden">
        <div className="mx-auto max-w-[520px]">
          <h1 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            Proven Non-Surgical Cervical Spondylosis Treatment with Ayurveda
          </h1>
        </div>
      </div>

      <div
        className="flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
        style={{ backgroundColor: "#D94E1A", flex: "0 0 54%" }}
      >
        <div className="w-full max-w-[680px] overflow-hidden bg-white shadow-2xl">
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
          <h1 className="mb-5 hidden text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:text-[2.65rem] lg:block">
            Proven Non-Surgical Cervical Spondylosis Treatment with Ayurveda
          </h1>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            1,500+ Cervical Spondylosis patients have shown significant
            improvement and are now living pain-free after undergoing our
            Holistic Ayurvedic Treatment. Our patients experience lasting
            relief from neck pain, stiffness, and nerve compression — without
            surgery, naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
