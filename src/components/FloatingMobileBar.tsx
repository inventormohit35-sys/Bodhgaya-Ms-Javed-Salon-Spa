import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="floating-mobile-action-bar"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0c0b09]/95 backdrop-blur-xl border-t border-[#d4af37]/30 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-2"
    >
      {/* Call Direct */}
      <a
        id="floating-call-btn"
        href={`tel:${SALON_INFO.phone}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#1c1915] border border-[#d4af37]/40 text-[#f5f1e8] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        title="Call Bodhgaya Ms Javed Salon & Spa"
      >
        <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Call</span>
      </a>

      {/* Book Appointment */}
      <button
        id="floating-book-btn"
        onClick={onOpenBooking}
        className="flex-[1.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6cf78] to-[#aa7c11] text-[#0f0e0c] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book</span>
      </button>

      {/* Get Directions */}
      <a
        id="floating-directions-btn"
        href={SALON_INFO.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#1c1915] border border-[#d4af37]/40 text-[#f5f1e8] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        title="Directions to Ariya Complex, Mastipur"
      >
        <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Map</span>
      </a>
    </div>
  );
};
