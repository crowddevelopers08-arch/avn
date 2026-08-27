"use client";

export default function NonSurgicalCareForAvascularNecrosisInfo() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <div
        className="flex min-h-[40vh] items-center justify-center p-4"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-12 w-12 rounded-full opacity-20 sm:block" style={{ backgroundColor: "#80c141" }}></div>
            <div className="absolute -bottom-4 -right-4 hidden h-14 w-14 rounded-full opacity-20 sm:block" style={{ backgroundColor: "#f05623" }}></div>

            <div className="relative mx-2 rounded-xl border bg-white p-6 shadow-lg" style={{ borderColor: "#114520", borderWidth: "1px" }}>
              <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl" style={{ color: "#114520" }}>
                Understanding Avascular Necrosis (AVN)
              </h1>

              <div className="mx-auto mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "#f05623" }}></div>

              <div className="space-y-3 text-center">
                <p className="text-base leading-relaxed sm:text-lg" style={{ color: "#114520" }}>
                  <span className="font-semibold" style={{ color: "#f05623" }}>
                    Avascular Necrosis (AVN)
                  </span>{" "}
                  occurs when blood flow to the hip bone is blocked, causing bone tissue to weaken and collapse.
                </p>

                <p className="text-base leading-relaxed sm:text-lg" style={{ color: "#114520" }}>
                  It&apos;s often mistaken for back pain or arthritis, even in early stages.
                </p>

                <p className="text-base leading-relaxed sm:text-lg" style={{ color: "#114520" }}>
                  If you&apos;ve suffered from <span style={{ color: "#f05623" }}>COVID-19</span>, used <span style={{ color: "#f05623" }}>steroids</span> for long, or consume <span style={{ color: "#f05623" }}>alcohol</span> regularly, you may be at risk.
                </p>

                <div className="pt-2">
                  <p
                    className="inline-block rounded-lg px-4 py-2 text-base font-semibold leading-relaxed sm:text-lg"
                    style={{
                      color: "#80c141",
                      backgroundColor: "rgba(128, 193, 65, 0.1)",
                      border: "2px solid #80c141",
                    }}
                  >
                    Stages 1 &amp; 2 can be reversed naturally without surgery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
