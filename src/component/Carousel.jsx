import React, { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const slidesPerView = 5;
  const totalSlides = images.length;

  // // Clonamos los primeros y últimos slides
  // const extendedImages = [
  //   ...images.slice(-slidesPerView), // clones al inicio
  //   ...images,
  //   ...images.slice(0, slidesPerView), // clones al final
  // ];

  // Arrancamos en el índice real (después de los clones iniciales)
  const [current, setCurrent] = useState(slidesPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + slidesPerView);
  };

  const previousSlide = () => {
    setCurrent((prev) => prev - slidesPerView);
  };

  // Reset cuando caemos en un clon
  useEffect(() => {
    if (current >= totalSlides + slidesPerView) {
      // Pasamos el final (clones)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(slidesPerView); // volver al real inicio
      }, 700);
    } else if (current < slidesPerView) {
      // Pasamos el inicio (clones)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(totalSlides); // ir al real final
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [current, totalSlides, slidesPerView]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Track */}
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${(current * 100) / slidesPerView}%)`,
          // width: `${(extendedImages.length * 100) / slidesPerView}%`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-1/5 flex-shrink-0 flex justify-center items-center p-2"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={previousSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ▶
      </button>
    </div>
  );
}
