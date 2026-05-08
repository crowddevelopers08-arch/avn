"use client";
import React, { useEffect, useRef, useState } from 'react';
import { withImageKit } from "@/lib/imagekit";

const Hipfour = () => {
  const cardGridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Hip AVN (Avascular Necrosis)",
      description: "Loss of blood supply to hip bone leading to joint collapse, severe pain, and limited mobility. Ayurveda helps restore vascularity and preserve joint function.",
      image: withImageKit("avascular-necrosis.jpg")
    },
    {
      id: 2,
      title: "Post-Viral Hip Arthritis",
      description: "Sudden hip pain and stiffness after viral infections like Chikungunya or Dengue, causing difficulty in walking and movement.",
      image: withImageKit("hiparthisis.jpg")
    },
    {
      id: 3,
      title: "Hip Osteoarthritis",
      description: "Degenerative wear and tear of hip joint cartilage, causing chronic pain, stiffness, and reduced range of motion.",
      image: withImageKit("orthesisii.jpg")
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
        className="max-w-6xl mx-auto px-4 max-[470px]:py-5 py-10" style={{fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Header Section */}
        <div className="text-center mb-10 max-[470px]:mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] mb-4">
            Hip Conditions <span className="text-[#f05623]">We Treat</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Specialized Ayurvedic treatments for hip joint disorders and mobility restoration
          </p>
        </div>

        {/* Enhanced Card Grid - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50
                shadow-xl hover:shadow-2xl transition-all duration-500 
                transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#80c141]/40
                cursor-pointer h-full flex flex-col
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Main Content Container */}
              <div className="flex flex-col h-full relative z-10">
                
                {/* Image Container with Enhanced Design */}
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Double Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#114520]/20 to-[#f05623]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Number Badge with Enhanced Design */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-[#f05623] to-[#ff7c4d] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:from-[#114520] group-hover:to-[#1a6b2c] transition-all duration-500 transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  
                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-bold text-lg text-white leading-tight drop-shadow-lg">
                      {card.title.split(' ')[0]}
                    </h4>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col">
                  
                  {/* Full Title */}
                  <h4 className="font-bold text-xl text-[#114520] mb-4 leading-tight group-hover:text-[#f05623] transition-colors duration-300">
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1 group-hover:text-gray-800 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Enhanced Learn More Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-[#80c141]/30 transition-colors duration-300">
                    <div className="flex items-center text-[#f05623] font-semibold text-sm group/btn cursor-pointer">
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
                    
                    {/* Treatment Duration Badge */}
                    <div className="text-xs bg-[#114520]/10 text-[#114520] px-3 py-1 rounded-full font-medium">
                      🕒 4-6 weeks
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#80c141] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8">
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#f05623] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#80c141]/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f05623]/5 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#80c141]/0 via-[#f05623]/0 to-[#114520]/0 group-hover:from-[#80c141]/5 group-hover:via-[#f05623]/5 group-hover:to-[#114520]/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="text-center max-[470px]:mt-6 mt-12">
          <div className="bg-gradient-to-r from-[#f8faf7] to-[#f0f8ec] rounded-2xl p-6 border border-[#80c141]/20">
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold text-[#114520]">95+ Years of Expertise</span> in treating hip conditions without surgery
            </p>
          </div>
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

export default Hipfour;
