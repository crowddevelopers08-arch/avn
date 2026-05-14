"use client";

import Image from "next/image";

import { DoctorProfilesCarousel } from "@/components/shared/DoctorProfilesCarousel";

export type LegacyDoctorProfile = {
  name: string;
  image: string;
  experience: string;
  title: string;
  specialization: string;
  description: string;
  education: string;
  languages: string[];
  achievements?: string;
};

type LegacyDoctorProfilesProps = {
  doctors: LegacyDoctorProfile[];
};

export function LegacyDoctorProfiles({ doctors }: LegacyDoctorProfilesProps) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <div
        className="mx-auto max-w-6xl bg-gray-50 p-4 font-sans sm:p-6 lg:p-8"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <DoctorProfilesCarousel
          items={doctors}
          renderItem={(doctor) => (
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:flex-row">
              <div className="flex items-center justify-center bg-white p-4 sm:p-6 lg:w-2/5 lg:p-8">
                <div className="relative w-full max-w-xs">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-80 lg:h-96">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 16rem"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -right-2 -top-2 z-20 rounded-full bg-[#f05623] px-3 py-1 text-xs font-semibold text-white shadow-lg sm:-right-3 sm:-top-3 sm:px-4 sm:py-2 sm:text-sm lg:-right-4 lg:-top-4">
                    {doctor.experience}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-4 text-center sm:gap-5 sm:p-6 lg:w-3/5 lg:gap-6 lg:p-8 lg:text-left">
                <div>
                  <h2 className="mb-2 text-xl font-semibold text-[#014214] sm:text-2xl">
                    Meet Your Doctor
                  </h2>
                  <div className="mx-auto h-1 w-16 rounded bg-[#f05623] sm:w-20 lg:mx-0" />
                </div>

                <div>
                  <h1 className="mb-2 text-2xl font-bold leading-tight text-[#114520] sm:mb-3 sm:text-3xl">
                    {doctor.name}
                  </h1>
                  <p className="mb-2 text-lg font-semibold leading-snug text-[#80c141] sm:text-xl">
                    {doctor.title}
                  </p>
                  <p className="text-base font-medium text-[#f05623] sm:text-lg">
                    {doctor.specialization}
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {doctor.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#014214] sm:mb-3 sm:text-xl">
                    Education & Expertise
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {doctor.education}
                  </p>
                </div>

                {doctor.achievements ? (
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-[#014214] sm:mb-3 sm:text-xl">
                      Achievements
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {doctor.achievements}
                    </p>
                  </div>
                ) : null}

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#114520] sm:mb-4 sm:text-xl">
                    Consultation Languages
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                    {doctor.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full bg-[#80c141] px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
}
