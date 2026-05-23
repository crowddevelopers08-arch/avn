"use client";

import React, { useState } from "react";

const brandLogo = "https://ik.imagekit.io/waseev72f/AVN-logo.png";

const ClientFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suggestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (message.text) setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Feedback submitted successfully!" });
        setFormData({ name: "", email: "", phone: "", suggestions: "" });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to submit feedback",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <div
        className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#f3f8e8_0%,_#dbeac6_30%,_#114520_100%)] p-3 sm:p-4 md:p-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="mx-auto my-4 w-full max-w-[95vw] rounded-[28px] border border-white/60 bg-white/95 p-4 shadow-[0_24px_80px_rgba(17,69,32,0.22)] backdrop-blur sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:max-w-xl">
          <div className="mb-4 flex justify-center sm:mb-6 md:mb-8">
            <div className="flex h-16 w-36 items-center justify-center overflow-hidden rounded-2xl bg-[#f6f9ee] ring-1 ring-[#d4e3bc] sm:w-40 md:h-20 md:w-44 lg:h-24 lg:w-52">
              <img
                src={brandLogo}
                alt="AVN Arogya Logo"
                className="h-full w-full object-contain p-2 sm:p-3"
              />
            </div>
          </div>

          <div className="mb-4 text-center sm:mb-6 md:mb-8">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#80c141] sm:mb-3 sm:text-xs">
              We&apos;re Listening
            </p>
            <h2 className="mb-2 text-lg font-bold text-[#114520] sm:mb-3 sm:text-xl md:text-2xl lg:text-3xl">
              Help Us Improve!
            </h2>
            <p className="mx-auto max-w-md text-xs leading-relaxed text-[#4c5f42] sm:text-sm md:text-base lg:text-lg">
              Tell us what didn&apos;t meet your expectations. We genuinely value your
              feedback and will work on making things better.
            </p>
          </div>

          {message.text && (
            <div
              className={`mb-4 rounded-lg border p-3 text-center ${
                message.type === "success"
                  ? "border-[#b7daa0] bg-[#f3f8e8] text-[#114520]"
                  : "border-[#f7b9a5] bg-[#fff1ec] text-[#b7421c]"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-[#114520] sm:mb-2 sm:text-sm md:text-base"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-[#d7e2c7] bg-[#fbfdf8] px-3 py-2 text-xs transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#80c141] disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-sm md:text-base"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-[#114520] sm:mb-2 sm:text-sm md:text-base"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-[#d7e2c7] bg-[#fbfdf8] px-3 py-2 text-xs transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#80c141] disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-sm md:text-base"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-medium text-[#114520] sm:mb-2 sm:text-sm md:text-base"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-[#d7e2c7] bg-[#fbfdf8] px-3 py-2 text-xs transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#80c141] disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-sm md:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="suggestions"
                className="mb-1 block text-xs font-medium text-[#114520] sm:mb-2 sm:text-sm md:text-base"
              >
                Your Suggestions *
              </label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                required
                rows={3}
                disabled={isSubmitting}
                className="w-full resize-none rounded-xl border border-[#d7e2c7] bg-[#fbfdf8] px-3 py-2 text-xs transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#80c141] disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-sm md:text-base"
                placeholder="Share your valuable suggestions and feedback..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 w-full cursor-pointer rounded-xl bg-[#114520] py-2 text-sm font-semibold text-white shadow-lg shadow-[#114520]/20 transition-all duration-200 hover:scale-[1.02] hover:bg-[#0c3318] hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400 sm:mt-4 sm:text-base md:py-3 md:text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>

          <button
            onClick={() => window.history.back()}
            disabled={isSubmitting}
            className="mt-2 w-full cursor-pointer rounded-xl border-2 border-[#f05623] bg-transparent py-2 text-sm font-semibold text-[#f05623] transition-all duration-200 hover:scale-[1.02] hover:bg-[#f05623] hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-transparent sm:mt-3 sm:text-base md:py-3 md:text-lg"
          >
            Back to Home
          </button>

          <div className="mt-3 rounded-2xl bg-[#f6f9ee] px-4 py-3 text-center text-xs text-[#4c5f42] sm:text-sm">
            Honest feedback helps us improve the care journey for every patient
            who visits AVN Arogya.
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
