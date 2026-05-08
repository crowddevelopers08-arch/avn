export default function ScLpApproachSection() {
  return (
    <section className="bg-white px-4 py-12 max-[470px]:py-6 sm:py-12">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] leading-tight mb-4 sm:mb-5">
          Our{" "}
          <span className="text-[#f05623]">Approach</span>
        </h2>

        <div className="mb-10 max-w-4xl mx-auto space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            There are several ways to manage sciatica without surgery, depending on the cause. What
            works for one person may not be as effective for someone else. At AVN Arogya, we
            understand the impact that sciatica can have on your daily life. Our approach is
            straightforward. Through a meticulous blend of traditional Ayurvedic therapies and
            personalized care, we aim to alleviate sciatica symptoms and restore your well-being.
          </p>
          <p>
            Our Holistic Treatment for Sciatica is designed to address the root cause of the
            condition while providing comprehensive relief. Our approach focuses on arresting the
            progress of the disease, alleviating pain, and enhancing your overall health.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto overflow-hidden rounded-[24px] border border-[#d6e5cf] shadow-[0_18px_40px_rgba(17,69,32,0.12)]">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/AD-wkxKS2TQ"
              title="Dr. Ramesh R Varier explains sciatica treatment"
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
