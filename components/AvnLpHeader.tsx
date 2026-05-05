import Image from "next/image";

export default function AvnLpHeader() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-3 py-3 sm:px-6 lg:px-10 xl:px-14">

        <div className="flex items-center">
          <Image
            src="/AVN-logo.png"
            alt="AVN Arogya Ayurvedic Hospital"
            width={320}
            height={64}
            className="h-[40px] w-auto object-contain sm:h-[54px] lg:h-[64px]"
            priority
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="flex flex-col items-center">
            <Image
              src="/nabh.png"
              alt="NABH Accredited"
              width={70}
              height={70}
              className="h-[38px] w-auto object-contain sm:h-[60px] lg:h-[70px]"
              priority
            />
            <p className="mt-1 hidden text-center text-[9px] leading-tight text-gray-500 sm:block sm:text-[10px]">
              1<sup>st</sup> Ayurvedic Hospital,<br />Tamil Nadu
            </p>
          </div>

          <a
            href="tel:+918047091234"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D94E1A] text-white shadow-sm transition-colors hover:bg-[#bf4215] sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-[15px]"
            aria-label="Call AVN Arogya"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="hidden truncate sm:inline">+91 80470-91234</span>
          </a>
        </div>

      </div>
    </header>
  );
}
