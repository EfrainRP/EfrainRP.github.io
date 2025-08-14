import { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    { id: 1, text: "Slide 1", color: "bg-blue-400" },
    { id: 2, text: "Slide 2", color: "bg-green-400" },
    { id: 3, text: "Slide 3", color: "bg-yellow-400" },
    { id: 4, text: "Slide 4", color: "bg-pink-400" },
  ];

  const [current, setCurrent] = useState(0);

  // Cambia automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Contenedor de slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-64 flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold ${slide.color}`}
          >
            {slide.text}
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200"
      >
        ❮
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
