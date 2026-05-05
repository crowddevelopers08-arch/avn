export default function CsLpApproachSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#eef6e7_0%,#f8fcf5_100%)] px-4 py-12 max-[470px]:py-6 sm:py-12">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] leading-tight mb-4 sm:mb-5">
          Our{" "}
          <span className="text-[#f05623]">Approach</span>
        </h2>

        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 max-w-3xl mx-auto leading-snug">
          90+ Years of Proprietary Treatment Protocols for Cervical Spondylosis
        </h3>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          Our Holistic Treatment for Cervical Spondylosis is designed to address the root
          cause of the condition while providing comprehensive relief from neck pain,
          stiffness, and nerve compression. Our approach focuses on restoring cervical
          alignment, alleviating pain, and strengthening the supporting muscles naturally.
        </p>

        <div className="max-w-[720px] mx-auto overflow-hidden rounded-[24px] border border-[#d6e5cf] shadow-[0_18px_40px_rgba(17,69,32,0.12)]">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ZGASzVSNXHw"
              title="Dr. Ramesh R Varier explains Cervical Spondylosis treatment"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
}
