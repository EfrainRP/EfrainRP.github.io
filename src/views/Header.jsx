import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 shadow-md bg-white dark:bg-gray-900 animate-fade-down">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600 dark:text-white">Efrain Robles</h1>

                {/* Botón hamburguesa para móvil */}
                <button
                    className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Menú de navegación */}
                <nav
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto md:space-x-6 md:block transition-all duration-300`}
                >
                    <a href="#about" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Sobre mí
                    </a>
                    <a href="#projects" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Proyectos
                    </a>
                    <a href="#contact" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Contacto
                    </a>
                </nav>
            </div>
        </header>
    );
}
