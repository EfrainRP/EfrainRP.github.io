import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 shadow-md bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/">
                    <h1 className="hidden sm:block md:text-2xl font-bold text-blue-600 dark:text-white">Developer Efrain</h1>
                    <h1 className="sm:hidden text-xl font-bold text-blue-600 dark:text-white">Dev Efrain</h1>
                </Link>

                {/* Botón hamburguesa para móvil */}
                <button
                    className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
                    className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto md:space-x-6 duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'} md:visible md:opacity-100 md:translate-y-0 sm:md:opacity-0`}
    //             className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto md:space-x-6 duration-300 ease-in-out
    // ${isOpen ? 'block' : 'hidden'}`}
                    // className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto md:space-x-6 transition-all duration-400 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible md:visible md:opacity-100 md:translate-y-0'}`}
                >
                    {['/', '/projects', '/experience', '/education', '/contact'].map((link, i) => (
                        <Link
                            key={i}
                            to={link}
                            className={`block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition ${
                                pathname === link ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
                            }`}
                        >
                        {link === '/' ? 'Home' : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
