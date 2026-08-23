import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/salonData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'beauty', label: 'Skin & Facials' },
    { id: 'spa', label: 'Spa & Wellness' },
    { id: 'bridal', label: 'Bridal Glamour' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#0c0b09] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4af37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161410] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="w-3 h-3" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f1e8] leading-tight mb-4">
            Inside Our <span className="gold-gradient-text">World of Beauty</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-[#bbb3a3] text-base sm:text-lg font-light leading-relaxed">
            A curated glimpse into the artistry, hair styling, skin treatments, and tranquil spa rituals we deliver in Bodh Gaya.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveImageIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0f0e0c] shadow-md shadow-[#d4af37]/20 scale-105'
                  : 'bg-[#14120f] text-[#a89f8f] border border-[#d4af37]/20 hover:text-[#f5f1e8] hover:border-[#d4af37]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredItems.map((item: GalleryItem, idx: number) => (
              <motion.div
                key={item.id}
                id={`gallery-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-lg cursor-pointer bg-[#14120f]"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09]/95 via-[#0c0b09]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* View Icon on Top Right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0c0b09]/80 border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#0f0e0c]/85 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Content Details on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#f5f1e8] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b8b09f] line-clamp-2 font-light">
                    {item.description}
                  </p>
                  <div className="mt-2 text-[11px] text-[#d4af37] font-semibold flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Click to view full image
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery replacement note */}
        <div className="mt-8 text-center text-xs text-[#8e8574] font-light">
          Experience our full portfolio of hair transformations and beauty rituals in person at Ariya Complex, Mastipur.
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && filteredItems[activeImageIndex] && (
          <motion.div
            id="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#1c1915] border border-[#d4af37]/40 text-[#eae5dc] hover:text-[#d4af37] hover:border-[#d4af37] transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1c1915]/80 border border-[#d4af37]/30 text-[#eae5dc] hover:text-[#d4af37] hover:border-[#d4af37] transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1c1915]/80 border border-[#d4af37]/30 text-[#eae5dc] hover:text-[#d4af37] hover:border-[#d4af37] transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#14120f]"
              >
                <img
                  src={filteredItems[activeImageIndex].image}
                  alt={filteredItems[activeImageIndex].title}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                />
                
                <div className="p-5 sm:p-6 bg-[#14120f] border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                      {filteredItems[activeImageIndex].categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5f1e8] mt-0.5">
                      {filteredItems[activeImageIndex].title}
                    </h3>
                    <p className="text-xs text-[#a89f8f] mt-1">
                      {filteredItems[activeImageIndex].description}
                    </p>
                  </div>

                  <div className="text-xs text-[#8e8574] font-mono shrink-0">
                    {activeImageIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
