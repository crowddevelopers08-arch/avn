export default function JpLpApproachSection() {
  return (
    <section className="bg-white px-4 py-12 max-[470px]:py-6 sm:py-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-2xl font-bold leading-tight text-[#114520] sm:mb-5 sm:text-3xl lg:text-4xl xl:text-[42px]">
          Our <span className="text-[#f05623]">Approach</span>
        </h2>

        <div className="mx-auto mb-10 max-w-4xl space-y-5 text-base leading-relaxed text-gray-700 sm:text-lg">
          <p>
            Managing Joint Pain without resorting to surgery involves recognizing that various
            factors contribute to this condition, and what works for one person might differ for
            another. At AVN Arogya, we empathize with the impact joint pain can have on your
            everyday life.
          </p>
          <p>
            Our approach is simple yet effective. By carefully blending traditional Ayurvedic
            therapies with individualized care, our goal is to ease the symptoms of joint pain and
            restore your well-being.
          </p>
          <p>
            Designed with a Holistic Perspective, our treatment for joint pain aims to target the
            root cause of the condition, ensuring comprehensive relief. We concentrate on halting
            the progression of the disease, relieving pain, and improving your overall health.
          </p>
          <p>
            Choose a personalized and holistic path to joint pain relief at AVN Arogya.
          </p>
        </div>

        <div className="mx-auto max-w-[720px] overflow-hidden rounded-[24px] border border-[#d6e5cf] shadow-[0_18px_40px_rgba(17,69,32,0.12)]">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/hZQMMxT0XFU"
              title="Joint pain treatment at AVN Arogya"
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
