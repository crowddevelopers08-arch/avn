"use client";
import React, { useEffect, useRef, useState } from 'react';

const Neckfive = () => {
  const cardGridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Cervical Spondylosis",
      description: "Age-related wear and tear of the cervical spine, causing stiffness, chronic neck pain, and restricted neck movement.",
      image: "cerival.jpeg"
    },
    {
      id: 2,
      title: "Cervical Disc Issues / Radiculopathy (Pinched Nerve)",
      description: "Disc bulges or herniation pressing on spinal nerves, leading to radiating pain, tingling, and weakness in arms and shoulders.",
      image: "cre.png"
    },
    {
      id: 3,
      title: "Neck Strain / Postural Stiffness",
      description: "Prolonged screen use or poor posture causing muscle fatigue, stiffness, and limited neck flexibility.",
      image: "Postural-strain.jpg"
    },
    {
      id: 4,
      title: "Frozen Shoulder (Adhesive Capsulitis)",
      description: "A condition where shoulder joint capsule becomes inflamed and stiff, severely limiting arm movement.",
      image: "3D-Shoulde.jpg"
    },
    {
      id: 5,
      title: "Periarthritis Shoulder",
      description: "Localized inflammation around the shoulder joint, affecting movement and causing sharp pain with activity.",
      image: "perthi.jpg"
    },
    {
      id: 6,
      title: "Polyarthritis (Shoulder Involvement)",
      description: "Multiple joint inflammation, often involving both shoulders, causing deep-seated pain and restricted arm activity.",
      image: "shoulderarth.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardGridRef.current) {
      observer.observe(cardGridRef.current);
    }

    return () => {
      if (cardGridRef.current) {
        observer.unobserve(cardGridRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cardGridRef} 
        className="max-w-7xl mx-auto px-4 py-12" style={{fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Header Section */}
        <div className="text-center mb-12 max-[470px]:mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] mb-4">
            Conditions <span className="text-[#f05623]">We Treat</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Comprehensive Ayurvedic solutions for neck and shoulder conditions
          </p>
        </div>

        {/* Enhanced Card Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                group relative overflow-hidden rounded-2xl bg-white 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                transform hover:-translate-y-3 border border-gray-100
                cursor-pointer
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Full Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#114520]/5 via-[#80c141]/5 to-[#f05623]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
              
              {/* Full Card Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#80c141]/30 transition-all duration-500 z-0"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-[#f05623] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:bg-[#114520] transition-colors duration-500">
                  {index + 1}
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#80c141] to-[#f05623] group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-6 sm:p-7 lg:p-8 bg-white group-hover:bg-transparent transition-all duration-500">
                {/* Title with Icon */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#80c141] rounded-full flex items-center justify-center mt-1 group-hover:bg-[#f05623] group-hover:scale-110 transition-all duration-500">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-lg sm:text-xl text-[#114520] leading-tight group-hover:text-[#f05623] transition-colors duration-300">
                    {card.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center text-[#f05623] font-semibold text-sm sm:text-base group/btn cursor-pointer">
                <a href="#learnmore">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">Learn More</span>
                  </a>
                  <div className="transform group-hover/btn:translate-x-2 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#80c141] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#f05623] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-300"></div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#80c141] rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-bounce transition-all duration-500 group-hover:delay-100"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#f05623] rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-500 group-hover:delay-200"></div>
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-[#114520] rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-all duration-500 group-hover:delay-300"></div>
              </div>

              {/* Pulse Ring Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#80c141]/20 group-hover:animate-pulse transition-all duration-500"></div>
            </div>
          ))}
        </div>


        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        `}</style>
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-card {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </>
  );
};

export default Neckfive;