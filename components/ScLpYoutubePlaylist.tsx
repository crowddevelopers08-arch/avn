"use client";

import React, { useState } from "react";

const videos = [
  {
    title: "Sciatica Patient Testimonial 1",
    time: "YouTube",
    url: "https://www.youtube.com/embed/1ZE6BMfHBS0",
    thumbnail: "https://img.youtube.com/vi/1ZE6BMfHBS0/mqdefault.jpg",
  },
  {
    title: "Sciatica Patient Testimonial 2",
    time: "YouTube",
    url: "https://www.youtube.com/embed/Hp0I-2FgfJE",
    thumbnail: "https://img.youtube.com/vi/Hp0I-2FgfJE/mqdefault.jpg",
  },
  {
    title: "Sciatica Patient Testimonial 3",
    time: "YouTube",
    url: "https://www.youtube.com/embed/rOg8HKBmxDg",
    thumbnail: "https://img.youtube.com/vi/rOg8HKBmxDg/mqdefault.jpg",
  },
];

export default function ScLpYoutubePlaylist() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col items-center px-4 py-10 max-[470px]:py-5 sm:px-6 bg-[radial-gradient(circle_at_top,rgba(240,86,35,0.12),transparent_28%),linear-gradient(180deg,#fff3eb_0%,#fffaf6_100%)]">
      <div className="flex justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#114520] text-center leading-tight max-[470px]:mb-5 mb-10">
          4500+{" "}
          <span className="text-[#f05623]">Sciatica Patients Healed</span>
        </h2>
      </div>

      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-[#f0d7ca] bg-white/90 shadow-[0_24px_60px_rgba(240,86,35,0.12)] backdrop-blur-sm lg:flex-row">
        <div className="w-full lg:w-2/3 aspect-video">
          <iframe
            className="w-full h-full"
            src={selectedVideo.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="max-h-[400px] w-full overflow-y-auto bg-white px-4 py-3 lg:w-1/3">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="font-bold text-lg">Patient Testimonials</h3>
            <p className="shrink-0 text-sm text-gray-500">{videos.length} Videos</p>
          </div>
          <ul className="space-y-3">
            {videos.map((video, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 cursor-pointer rounded-lg p-2 transition ${
                  selectedVideo.url === video.url ? "bg-[#ffe3d1]" : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-20 h-14 object-cover rounded-md flex-shrink-0"
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

      <div className="mt-10 flex w-full max-w-4xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
        <a href="#appointment-form" className="w-full sm:w-auto">
          <button className="w-full justify-center rounded-xl bg-[#f05623] px-6 py-4 text-base font-bold text-white shadow-[0_16px_30px_rgba(240,86,35,0.28)] transition-colors duration-200 hover:bg-[#80c141] sm:min-w-[300px] sm:px-8 sm:text-lg">
            Get a Teleconsultation Today
          </button>
        </a>
      </div>
    </div>
  );
}
