"use client";
import React, { useState } from "react";
import { BackconsultationModal } from "./backpopupform";
import { KneeconsultationModal } from "./kneepopupform";

export default function KneeyoutubePlaylist() {
  const videos = [
    {
      title: "Knee Arthritis Ayurvedic Treatment at AVN",
      time: "2:50",
      url: "https://www.youtube.com/embed/bdaJcLESAaI",
      thumbnail: "https://img.youtube.com/vi/HiQxXyCvoqY/mqdefault.jpg",
    },
   {
  title: "Ayurvedic Knee Arthritis Treatment Success",
  time: "4:16",
  url: "https://www.youtube.com/embed/FpzSAVHzUmI",
  thumbnail: "https://img.youtube.com/vi/eQDwbRycZts/mqdefault.jpg",
},
    {
      title: "Post-Viral Arthritis Treatment explained by Dr. Ramesh Varier",
      time: "2:01",
      url: "https://www.youtube.com/embed/2U4ThLbu6oo",
      thumbnail: "https://img.youtube.com/vi/rOg8HKBmxDg/mqdefault.jpg",
    },
    {
      title: "Osteoarthritis Treatment From AVN Arogya",
      time: "1:56",
      url: "https://www.youtube.com/embed/XwSxQuxXX5Y",
      thumbnail: "https://img.youtube.com/vi/HMc1P8dRW5M/mqdefault.jpg",
    },
    {
      title: "Osteorthritis of Knees Treatment From AVN Arogya",
      time: "2:10",
      url: "https://www.youtube.com/embed/ExRZyXO0am4",
      thumbnail: "https://img.youtube.com/vi/zMILBpj3Ar0/mqdefault.jpg",
    },
    {
      title: "Stage 3 Knee Pain Recovery Without Surgery",
      time: "4:16",
      url: "https://www.youtube.com/embed/GoQfw9BJroM",
      thumbnail: "https://img.youtube.com/vi/U5v-HRW11S0/mqdefault.jpg",
    },
      {
      title: "USA Patient Heals Osteoarthritis Knee Pain Naturally at AVN Madurai",
      time: "4:16",
      url: "https://www.youtube.com/embed/ewNdxZZ2fUo",
      thumbnail: "https://img.youtube.com/vi/U5v-HRW11S0/mqdefault.jpg",
    },
  ];

  const [selectedVideo, setSelectedVideo] = React.useState(videos[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center py-10 max-[470px]:py-5 px-4">
      <div className="flex justify-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-5 mb-10">
          4000+ 
          <span className="text-[#f05623]">Patients Healed</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row rounded-2xl shadow-md overflow-hidden max-w-6xl w-full">
        {/* Main video */}
        <div className="w-full lg:w-2/3 aspect-video">
          <iframe
            className="w-full h-full"
            src={selectedVideo.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Playlist */}
        <div className="w-full lg:w-1/3 bg-white px-4 py-3 overflow-y-auto max-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Arthritis Playlist</h3>
            <p className="text-sm text-gray-500">{videos.length} Videos</p>
          </div>
          <ul className="space-y-3">
            {videos.map((video, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 cursor-pointer rounded-lg p-2 transition ${
                  selectedVideo.url === video.url
                    ? "bg-[#ffe3d1]"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-20 h-14 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{video.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shiny Button */}
      <button 
        className="shiny-button mt-8"
        onClick={handleOpenModal}
      >
        Get a Free Teleconsultation Today
      </button>

      {/* Consultation Modal */}
      <KneeconsultationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      <style jsx>{`
        .shiny-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: #f05623;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Rubik', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(237, 95, 33, 0.3);
          transition: all 0.3s ease;
          min-width: auto;
          text-align: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .shiny-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.2) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% { left: -75%; }
          100% { left: 120%; }
        }

        .shiny-button:hover,
        .shiny-button:focus {
          background: #d4561d;
          box-shadow: 0 6px 20px rgba(237, 95, 33, 0.4);
          transform: translateY(-1px);
        }

        /* Mobile First Styles */
        @media (min-width: 375px) {
          .shiny-button {
            padding: 9px 18px;
            font-size: 14px;
            gap: 6px;
          }
        }

        @media (min-width: 480px) {
          .shiny-button {
            padding: 10px 20px;
            font-size: 15px;
            gap: 7px;
          }
        }

        @media (min-width: 640px) {
          .shiny-button {
            padding: 11px 22px;
            font-size: 15px;
            gap: 8px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button {
            padding: 12px 24px;
            font-size: 16px;
            min-width: 160px;
          }
        }

        @media (min-width: 1024px) {
          .shiny-button {
            padding: 12px 26px;
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          .shiny-button {
            padding: 13px 28px;
            font-size: 17px;
          }
        }

        /* Icon sizes */
        .shiny-button svg {
          width: 16px;
          height: 16px;
        }

        @media (min-width: 480px) {
          .shiny-button svg {
            width: 17px;
            height: 17px;
          }
        }

        @media (min-width: 768px) {
          .shiny-button svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
}