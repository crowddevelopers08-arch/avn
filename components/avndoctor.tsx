"use client";
import React from 'react';
import { withImageKit } from "@/lib/imagekit";

interface DoctorProfile {
  name: string;
  image: string;
  experience: string;
  title: string;
  specialization: string;
  description: string;
  education: string;
  languages: string[];
  achievements?: string;
}

const AvnDoctorProfile = () => {
  const doctors: DoctorProfile[] = [
    {
      name: "Dr. Ramesh R Varier",
      image: withImageKit("Dr.Ramesh.jpg"),
      experience: "35+ Years",
      title: "Managing Director & Chief Ayurvedic Physician – AVN Arogya Ayurvedic Hospital",
      specialization: "Specialist in Spine & Joint Disorders | 35+ Years of Clinical Excellence",
      description: "Dr. Varier is a nationally recognised Ayurvedic authority in the treatment of spinal disorders, including lumbar spondylosis, herniated discs, sciatica, and spinal stenosis. With over 3 decades of clinical experience, he has helped thousands of patients avoid surgery through holistic and personalised Ayurvedic care.",
      education: "Graduating as the 1st Rank Holder from Madras University in 1986, he brings unparalleled expertise in designing integrative spine treatment protocols that combine herbal formulations, Panchakarma detox therapies, physiotherapy, and yoga.",
      languages: ["English", "Tamil", "Hindi", "Malayalam"]
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <div className="font-sans max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50" style={{fontFamily: "'Outfit', sans-serif" }}>
        <div className="space-y-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Left side with clean image design */}
              <div className="lg:w-2/5 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-white">
                <div className="relative w-full max-w-xs">
                  {/* Clean Image Container */}
                  <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-[#f05623] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm z-20 shadow-lg">
                    {doctor.experience}
                  </div>
                </div>
              </div>

              {/* Right side with content */}
              <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left">
                {/* Section Header */}
                <div>
                  <h2 className="text-[#014214] text-xl sm:text-2xl font-semibold mb-2">Meet Your Doctor</h2>
                  <div className="w-16 sm:w-20 h-1 bg-[#f05623] rounded mx-auto lg:mx-0"></div>
                </div>

                {/* Name and Title */}
                <div>
                  <h1 className="text-[#114520] text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                    {doctor.name}
                  </h1>
                  <p className="text-[#80c141] text-lg sm:text-xl font-semibold mb-2 leading-snug">
                    {doctor.title}
                  </p>
                  <p className="text-[#f05623] text-base sm:text-lg font-medium">
                    {doctor.specialization}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {doctor.description}
                  </p>
                </div>

                {/* Education & Expertise */}
                <div>
                  <h3 className="text-[#014214] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Education & Expertise</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {doctor.education}
                  </p>
                </div>

                {/* Achievements (for additional doctors) */}
                {doctor.achievements && (
                  <div>
                    <h3 className="text-[#014214] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Achievements</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {doctor.achievements}
                    </p>
                  </div>
                )}

                {/* Languages */}
                <div>
                  <h3 className="text-[#114520] text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Consultation Languages</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                    {doctor.languages.map((language, langIndex) => (
                      <span 
                        key={langIndex}
                        className="bg-[#80c141] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvnDoctorProfile;
