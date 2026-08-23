import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { VideoSection } from './components/VideoSection';
import { AppointmentCta } from './components/AppointmentCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Haircut & Styling');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0b09] text-[#eae5dc] flex flex-col relative selection:bg-[#d4af37] selection:text-[#0c0b09]">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About onOpenBooking={() => handleOpenBooking()} />
        <Services onSelectServiceForBooking={(srv) => handleOpenBooking(srv)} />
        <WhyChooseUs />
        <Reviews onOpenBooking={() => handleOpenBooking()} />
        <Gallery />
        <VideoSection />
        <AppointmentCta onOpenBooking={() => handleOpenBooking()} />
        <ContactSection />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer />

      {/* Floating Mobile Action Bar */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
