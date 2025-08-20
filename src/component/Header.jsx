import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { path: "/", label: "Home" },
        { path: "/projects", label: "Projects" },
        { path: "/experience", label: "Experience" },
        { path: "/education", label: "Education" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed w-full top-0 z-50 shadow-md bg-gray-900 rounded-b-2xl">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-2">
                    <h1 className="hidden sm:block md:text-2xl font-bold text-white">
                        Developer Efrain
                    </h1>
                    <h1 className="sm:hidden text-xl font-bold text-white">
                        Dev Efrain
                    </h1>
                </Link>

                {/* Botón hamburguesa */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className={`w-7 h-7 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Menú navegación */}
                <nav
                    className={`
                        absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 
                        flex flex-col md:flex-row md:space-x-6 shadow-md md:shadow-none
                        transition-all duration-400 ease-in-out
                        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"}
                        overflow-hidden md:overflow-visible
                    `}
                >
                    {links.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsOpen(false)} // cerrar menú al hacer click en móvil
                            className={`px-4 py-2 hover:text-blue-600 transition ${pathname === path
                                ? "text-blue-600"
                                : "text-white"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
