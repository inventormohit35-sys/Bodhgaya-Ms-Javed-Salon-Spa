import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Phone, Sparkles, User, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { SALON_INFO, SERVICES_DATA } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [service, setService] = useState<string>(preselectedService || 'Haircut & Styling');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('11:00 AM');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Bodhgaya Ms Javed Salon & Spa! I would like to book an appointment:\n\n• Service: ${service}\n• Name: ${name || 'Guest'}\n• Phone: ${phone || 'Not provided'}\n• Preferred Date: ${date}\n• Preferred Time: ${time}\n${notes ? `• Special Request: ${notes}\n` : ''}\nPlease confirm my slot. Thank you!`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917739068901?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleCallDirect = () => {
    window.location.href = `tel:${SALON_INFO.phone}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#14120f] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 z-10 my-auto overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Gold Accent Strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11]" />

          {/* Close Button */}
          <button
            id="booking-modal-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1915] border border-[#d4af37]/30 text-[#eae5dc] hover:text-[#d4af37] hover:border-[#d4af37] transition-all cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#201c16] border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Reserve Your Session</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f1e8] leading-tight">
                  Book an Appointment
                </h3>
                <p className="text-xs text-[#a89f8f] mt-1">
                  Bodhgaya Ms Javed Salon &amp; Spa • Ariya Complex, Mastipur
                </p>
              </div>

              {/* Direct Phone Bar */}
              <div className="p-3.5 rounded-xl bg-[#1d1914] border border-[#d4af37]/30 flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0f0e0c] flex items-center justify-center font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">Immediate Booking</div>
                    <div className="text-xs font-bold text-[#f5f1e8]">{SALON_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={handleCallDirect}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2b251d] hover:bg-[#d4af37] text-[#f5f1e8] hover:text-[#0f0e0c] text-xs font-bold transition-all cursor-pointer"
                >
                  Call Now
                </button>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1.5">
                    Select Service
                  </label>
                  <select
                    id="booking-service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1915] border border-[#d4af37]/30 text-[#f5f1e8] text-sm focus:outline-none focus:border-[#d4af37] transition-all"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[#1c1915] text-[#f5f1e8]">
                        {s.name} ({s.categoryLabel})
                      </option>
                    ))}
                    <option value="Custom Bridal Package" className="bg-[#1c1915] text-[#f5f1e8]">
                      Custom Bridal / Groom Package
                    </option>
                    <option value="General Consultation" className="bg-[#1c1915] text-[#f5f1e8]">
                      General Consultation
                    </option>
                  </select>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b8b09f] mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8e8574] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Priya Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-[#f5f1e8] text-xs sm:text-sm placeholder-[#6b6458] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b8b09f] mb-1">
                      Your Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8e8574] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-[#f5f1e8] text-xs sm:text-sm placeholder-[#6b6458] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b8b09f] mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#8e8574] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-[#f5f1e8] text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#b8b09f] mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#8e8574] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-[#f5f1e8] text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="10:00 AM">10:00 AM - Morning</option>
                        <option value="11:30 AM">11:30 AM - Morning</option>
                        <option value="01:00 PM">01:00 PM - Afternoon</option>
                        <option value="03:00 PM">03:00 PM - Afternoon</option>
                        <option value="05:00 PM">05:00 PM - Evening</option>
                        <option value="06:30 PM">06:30 PM - Evening</option>
                        <option value="08:00 PM">08:00 PM - Evening</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#b8b09f] mb-1">
                    Special Requests / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific hair type, bridal party count, or custom requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-[#f5f1e8] text-xs sm:text-sm placeholder-[#6b6458] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="modal-submit-whatsapp-btn"
                    className="w-full flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6cf78] to-[#aa7c11] text-[#0f0e0c] font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Booking Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleCallDirect}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-[#d4af37]/40 bg-[#1c1915] text-[#f5f1e8] hover:text-[#d4af37] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>Call Directly</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#f5f1e8] mb-2">
                Booking Request Sent!
              </h4>
              <p className="text-xs sm:text-sm text-[#bbb3a3] max-w-sm mx-auto mb-6">
                Thank you for choosing Bodhgaya Ms Javed Salon &amp; Spa. We look forward to welcoming you for your {service} session.
              </p>

              <div className="p-4 rounded-xl bg-[#1c1915] border border-[#d4af37]/25 text-left text-xs text-[#cfc8ba] space-y-1.5 mb-6">
                <div><strong>Service:</strong> {service}</div>
                <div><strong>Location:</strong> Ariya Complex, Mastipur, Bodh Gaya</div>
                <div><strong>Direct Contact:</strong> {SALON_INFO.phone}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#221e17] text-[#eae5dc] text-xs font-semibold uppercase tracking-wider"
                >
                  Done
                </button>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d4af37] text-[#0f0e0c] text-xs font-bold uppercase tracking-wider"
                >
                  Call Salon Now
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
