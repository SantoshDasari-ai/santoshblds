import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideShowProps {
  slides: string[];
  title?: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ slides, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}

      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentIndex}
              src={slides[currentIndex]}
              variants={slideVariants}
              initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full object-contain"
              alt={`Slide ${currentIndex + 1}`}
            />
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Slide counter and dots */}
      <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          Slide {currentIndex + 1} of {slides.length}
        </div>

        <div className="flex space-x-1 overflow-x-auto py-1 max-w-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
