'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const BannerCarousel = ({ 
  images = [], 
  autoplayDuration = 5000,
  transitionType = 'fade' // 'fade' or 'slide'
}: {
  images: Array<{ src: string; alt: string; title: string; subtitle: string }>;
  autoplayDuration?: number;
  transitionType?: 'fade' | 'slide';
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayDuration);

    return () => clearInterval(interval);
  }, [images.length, autoplayDuration]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-[#F7F8F3] flex items-center justify-center">
        <p className="text-[#6B1E23] text-lg">No images to display</p>
      </div>
    );
  }

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const slideVariants = {
  enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
  exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-[#2C0F12] group">
      <AnimatePresence mode="wait" custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={transitionType === 'fade' ? fadeVariants : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C0F12]/40 to-transparent" />
          
          {/* Content overlay */}
          {images[currentIndex].title && (
            <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[#F7F8F3] max-w-md"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {images[currentIndex].title}
                </h2>
                {images[currentIndex].subtitle && (
                  <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
                    {images[currentIndex].subtitle}
                  </p>
                )}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6B1E23]/80 hover:bg-[#6B1E23] text-[#F7F8F3] p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6B1E23]/80 hover:bg-[#6B1E23] text-[#F7F8F3] p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#F7F8F3] scale-110'
                : 'bg-[#F7F8F3]/50 hover:bg-[#F7F8F3]/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        key={currentIndex}
        className="absolute bottom-0 left-0 h-1 bg-[#6B1E23]"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
      />
    </div>
  );
};

export default BannerCarousel;