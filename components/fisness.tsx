"use client";
import React, { useEffect, useRef, useState } from 'react';
import { withImageKit } from "@/lib/imagekit";

const CardGrid = () => {
  const cardGridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Osteoarthritis (Knee)",
      description: "Degeneration of knee cartilage causing joint pain, stiffness, and difficulty in climbing stairs or walking long distances.",
      image: "https://ik.imagekit.io/waseev72f/Osteoarthritis.png"
    },
    {
      id: 2,
      title: "Rheumatoid Arthritis (Knee)",
      description: "An autoimmune condition causing joint inflammation, swelling, and progressive pain in one or both knees.",
      image: withImageKit("rehmu.jpeg")
    },
    {
      id: 3,
      title: "Polyarthritis (Knee & Ankle)",
      description: "Multiple joint pain involving the knees and ankles, often due to chronic conditions or systemic inflammation.",
      image: withImageKit("poly.jpg")
    },
    {
      id: 4,
      title: "Post-Viral Arthritis (Knee & Ankle)",
      description: "Sudden onset joint pain and swelling after viral infections like Chikungunya, affecting mobility and strength.",
      image: withImageKit("How-to.jpeg")
    },
    {
      id: 5,
      title: "Plantar Fasciitis",
      description: "Heel pain and stiffness due to inflammation of the tissue band connecting heel bone to toes, often worse in the morning.",
      image: withImageKit("plantar.jpg")
    },
    {
      id: 6,
      title: "Achilles Tendinitis / Calcaneal Bursitis",
      description: "Inflammation around the heel or Achilles tendon causing pain during walking, running, or standing for long periods.",
      image: "https://ik.imagekit.io/waseev72f/achilles.jpg"
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
        className="max-w-7xl mx-auto px-4" 
        style={{fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="text-center mb-12 max-[470px]:mb-4 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] mb-4">
            Conditions <span className="text-[#f05623]">We Treat</span>
          </h2>
        </div>

        {/* Responsive grid with better breakpoints */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl 
                transition-all duration-500 cursor-pointer bg-white
                border-2 border-[#80c141]
                transform hover:-translate-y-2
                h-full flex flex-col
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                boxShadow: '0 4px 20px rgba(128, 193, 65, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(240, 86, 35, 0.25)';
                e.currentTarget.style.borderColor = '#f05623';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(128, 193, 65, 0.15)';
                e.currentTarget.style.borderColor = '#80c141';
              }}
            >
              {/* Orange accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#f05623]"></div>
              
              <div className="overflow-hidden w-full">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-4 sm:p-6 lg:p-7 flex-grow flex flex-col">
                {/* Title with decorative element */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-[#f05623] rounded-full"></div>
                  <h4 className="font-bold text-base max-[470px]:text-[20px] sm:text-lg lg:text-xl text-[#114520] leading-tight transition-colors duration-300 hover:text-[#f05623]">
                    {card.title}
                  </h4>
                </div>
                
                <p className="text-xs max-[470px]:text-[15px] sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
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

export default CardGrid;
