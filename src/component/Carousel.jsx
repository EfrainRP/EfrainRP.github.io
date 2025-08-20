import React, { useState, useEffect, useRef } from "react";

import front from "../assets/front.json";
import back from "../assets/back.json";
import devOps from "../assets/devOps.json";
import language from "../assets/language.json";
import others from "../assets/others.json";

export default function Carousel({ images , className, children}) {
  // const dataImages = [
  //   ...front.filter((item) => images.includes(item.name)),
  //   ...back.filter((item) => images.includes(item.name)),
  //   ...devOps.filter((item) => images.includes(item.name)),
  //   ...language.filter((item) => images.includes(item.name)),
  //   ...others.filter((item) => images.includes(item.name)),
  // ];
  let dataImages = [
    ...front,
    ...back,
    ...devOps,
    ...language,
    ...others,
  ];

  dataImages = dataImages.filter((item) => images.includes(item.name));

  const slidesPerView = window.innerWidth < 768 ? 4 : 6; // 1 slide on mobile, 5 on desktop
  const totalSlides = dataImages.length;
  const totalPages = Math.ceil(totalSlides / slidesPerView);

  const [currentPage, setCurrentPage] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const previousSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // swipe touch
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 50) {
      previousSlide();
    } else if (diff < -50) {
      nextSlide();
    }
    isDragging.current = false;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out md:w-full"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
          // width: `${totalPages * 100}%`,
          // width: `121.6%`,
        }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className={`${className} flex w-full flex-shrink-0 justify-around items-center`}
          >
            {dataImages
              .slice(
                pageIndex * slidesPerView,
                pageIndex * slidesPerView + slidesPerView
              )
              .map((img, idx) => (
                <div
                  key={idx}
                  className={`w-1/${slidesPerView} mx:auto flex flex-col justify-center items-center p-2`}
                >
                  <img
                    src={img.icon}
                    alt={img.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className={`text-center text-gray-600 text-sm ${totalPages > 1 && "mb-4"}`}>{img.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Botones */}
      {totalPages > 1 && (
        <>
          <button
            onClick={previousSlide}
            className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/90"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/90"
          >
            ▶
          </button>
        
      

        {/* Indicadores */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentPage ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </>
      )}
    </div>
  );
}
