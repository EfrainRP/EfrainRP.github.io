import { useState } from "react";

export default function AccordionItem ({ title, children, className, classNameChildren = "flex flex-col md:flex-row space-x-6 md:space-x-6 md:space-y-0 space-y-4 justify-between items-center py-2 text-gray-600"}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        className="w-full flex justify-between items-center py-2 text-left text-gray-800 font-semibold hover:text-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`${classNameChildren} p-4 bg-gray-50 rounded-b-lg`}>
          {children}
        </div>

      )}
    </div>
  );
}

// export default function Accordion() {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded shadow-md">
//       <AccordionItem title="¿Qué es Tailwind CSS?">
//         Tailwind CSS es un framework de utilidad para construir interfaces rápidas y personalizables.
//       </AccordionItem>
//       <AccordionItem title="¿Cómo funciona React?">
//         React es una biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.
//       </AccordionItem>
//       <AccordionItem title="¿Qué es un acordeón?">
//         Un acordeón es un componente que muestra y oculta contenido en secciones plegables.
//       </AccordionItem>
//     </div>
//   );

