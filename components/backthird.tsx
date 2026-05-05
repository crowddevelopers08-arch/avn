"use client";
import React, { useEffect, useRef, useState } from 'react';

const CardGrid = () => {
  const cardGridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Sciatica",
      description: "Sharp, radiating pain that travels from the lower back to one or both legs due to nerve compression.",
      image: "sciaticaback.jpg"
    },
    {
      id: 2,
      title: "Slipped / Herniated / Bulging Disc",
      description: "Displacement or rupture of spinal discs causing stiffness, numbness, and severe back pain.",
      image: "depositphotos.jpg"
    },
    {
      id: 3,
      title: "Lumbar Spondylosis",
      description: "Degeneration of the lower spine leading to chronic back pain, stiffness, and reduced flexibility.",
      image: "lunamm.png"
    },
    {
      id: 4,
      title: "Spinal Stenosis",
      description: "Narrowing of spinal spaces that puts pressure on the nerves, often leading to walking difficulties.",
      image: "synooo.jpg"
    },
    {
      id: 5,
      title: "Sacroiliitis (including Ankylosing Spondylitis)",
      description: "Inflammation of the sacroiliac joint that connects the spine and pelvis, causing buttock and lower back pain.",
      image: "Sacroiliitis.jpg"
    },
    {
      id: 6,
      title: "Spondylolysis",
      description: "Stress fracture or defect in the vertebra causing instability, especially in young athletes or repetitive strain cases.",
      image: "Spondylolysis.jpg"
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
      className="max-w-7xl mx-auto px-4" style={{fontFamily: "'Outfit', sans-serif" }}
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
              p-4 sm:p-6 lg:p-8 border border-[#80c141] rounded-xl sm:rounded-2xl 
              hover:shadow-xl hover:shadow-[#88be22]/20 flex flex-col items-center 
              transition-all duration-500 cursor-pointer bg-white
              transform hover:-translate-y-2
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
              }
            `}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
            }}
          >
            <div className="overflow-hidden rounded-lg border w-full">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-52 xs:h-56 max-[470px]:h-[250px] sm:h-60 md:h-64 lg:h-68 xl:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
              <h4 className="font-bold text-base max-[470px]:text-[20px] sm:text-lg lg:text-xl text-[#114520] leading-tight transition-colors duration-300 group-hover:text-[#f05623]">
                {card.title}
              </h4>
              <p className="mt-2 text-xs max-[470px]:text-[15px] sm:text-sm lg:text-base text-gray-600 leading-relaxed">
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