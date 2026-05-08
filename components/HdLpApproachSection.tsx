export default function HdLpApproachSection() {
  return (
    <section className="bg-white px-4 py-12 max-[470px]:py-6 sm:py-12">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] leading-tight mb-4 sm:mb-5">
          Our{" "}
          <span className="text-[#f05623]">Approach</span>
        </h2>

        <div className="mb-10 max-w-4xl mx-auto space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Managing a herniated disc without resorting to surgery involves recognizing
            that various factors contribute to this condition, and what works for one
            person might differ for another. At AVN Arogya, we empathize with the impact
            a herniated disc can have on your everyday life.
          </p>
          <p>
            Our approach is simple yet effective. By carefully blending traditional
            Ayurvedic therapies with individualized care, our goal is to ease the symptoms
            of a herniated disc and restore your well-being.
          </p>
          <p>
            Designed with a Holistic Perspective, our treatment for a bulging disc
            aims to target the root cause of the condition, ensuring comprehensive relief.
            We concentrate on halting the progression of the disease, relieving pain, and
            improving your overall health.
          </p>
          <p>
            Choose a personalized and holistic path to herniated disc relief at AVN
            Arogya.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto overflow-hidden rounded-[24px] border border-[#d6e5cf] shadow-[0_18px_40px_rgba(17,69,32,0.12)]">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/zMILBpj3Ar0"
              title="Dr. Ramesh R Varier explains herniated disc treatment"
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
