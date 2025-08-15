import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://picsum.photos/id/1016/300/200",
  "https://picsum.photos/id/1018/300/200",
  "https://picsum.photos/id/1020/300/200",
  "https://picsum.photos/id/1024/300/200",
  "https://picsum.photos/id/1035/300/200",
  "https://picsum.photos/id/1038/300/200",
  "https://picsum.photos/id/1040/300/200",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
];

// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

export default function Carousel() {
  const slidesPerView = 5;
  const totalSlides = images.length;
  const [current, setCurrent] = useState(0);
  const containerRef = useRef();

  // Movimiento automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  // Generamos un array circular para el desplazamiento continuo
  const getVisibleSlides = () => {
    let visible = [];
    for (let i = 0; i < totalSlides + slidesPerView; i++) {
      visible.push(images[(current + i) % totalSlides]);
    }
    return visible;
  };

  const slideWidth = 50 / slidesPerView;

  return (
    <div className="overflow-hidden relative w-full">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${current * slideWidth}%)`,
          width: `${(images.length + slidesPerView) * slideWidth}%`,
        }}
      >
        {getVisibleSlides().map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2"
            style={{ width: `${slideWidth}%` }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
        <button
          onClick={previousSlide}
          className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-3 h-3 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}