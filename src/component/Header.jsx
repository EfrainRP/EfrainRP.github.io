import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 shadow-md bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/">
                    <h1 className="md:hidden text-xl font-bold text-blue-600 dark:text-white">Dev Efrain</h1>
                    <h1 className="hidden md:block text-xl font-bold text-blue-600 dark:text-white">Developer Efrain</h1>
                </Link>

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
                    <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Home
                    </Link>
                    <Link to="/projects" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Projects
                    </Link>
                    <Link to="/experience" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Experience
                    </Link>
                    <Link to="/education" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Education
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
}
