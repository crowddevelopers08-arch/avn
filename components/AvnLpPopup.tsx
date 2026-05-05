"use client";

interface AvnLpConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AvnLpConsultationModal({ isOpen, onClose }: AvnLpConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold leading-none text-gray-400 hover:text-gray-700"
          aria-label="Close consultation modal"
        >
          X
        </button>

        <h2 className="mb-2 text-xl font-bold text-[#114520]">Book a Teleconsultation</h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          Connect with our AVN specialist from the comfort of your home.
        </p>

        <a
          href="#appointment-form"
          className="block w-full rounded-[28px] bg-[#f05623] px-8 py-4 text-center text-lg font-bold text-white shadow-[0_16px_30px_rgba(240,86,35,0.28)] transition-colors hover:bg-[#d94e1a]"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
