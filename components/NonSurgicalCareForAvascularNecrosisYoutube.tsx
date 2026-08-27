"use client";

import { useState } from "react";
import { HipconsultationModal } from "./Hippopup";

const videos = [
  {
    title: "Avascular Necrosis Treatment From AVN Arogya | Dr. Ramesh R Varier Explains",
    time: "2:50",
    url: "https://www.youtube.com/embed/-RFgJN6rkrg",
    thumbnail: "https://img.youtube.com/vi/HiQxXyCvoqY/mqdefault.jpg",
  },
  {
    title: "Best AVN Treatment in India | Mr. Gaurav's Recovery from AVN without Surgery",
    time: "4:16",
    url: "https://www.youtube.com/embed/2Eyu-54lSnA",
    thumbnail: "https://img.youtube.com/vi/eQDwbRycZts/mqdefault.jpg",
  },
  {
    title: "Ayurvedic Treatment for AVN of Hip in India | Mrs. Dhinal's Non-Surgical Recovery Journey",
    time: "2:01",
    url: "https://www.youtube.com/embed/0Q49zVFX9O8",
    thumbnail: "https://img.youtube.com/vi/rOg8HKBmxDg/mqdefault.jpg",
  },
];

export default function NonSurgicalCareForAvascularNecrosisYoutube() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center px-4 py-10 max-[470px]:py-5">
      <div className="flex justify-center">
        <h2 className="mb-10 text-2xl font-bold text-[#114520] max-[470px]:mb-5 sm:text-4xl lg:text-5xl">
          4000+ <span className="text-[#f05623]">Patients Healed</span>
        </h2>
      </div>

      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl shadow-md lg:flex-row">
        <div className="aspect-video w-full lg:w-2/3">
          <iframe
            className="h-full w-full"
            src={selectedVideo.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="max-h-[400px] w-full overflow-y-auto bg-white px-4 py-3 lg:w-1/3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Arthritis Playlist</h3>
            <p className="text-sm text-gray-500">{videos.length} Videos</p>
          </div>
          <ul className="space-y-3">
            {videos.map((video, i) => (
              <li
                key={i}
                className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition ${
                  selectedVideo.url === video.url ? "bg-[#ffe3d1]" : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} className="h-14 w-20 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-medium text-gray-800">
                    {video.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{video.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="https://avnarogya.zohobookings.in/lp/#/lp">
        <button className="shiny-button mt-8">Book Your Teleconsultation Today</button>
      </a>

      <HipconsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
          font-family: "Rubik", sans-serif;
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
          content: "";
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
      `}</style>
    </div>
  );
}
