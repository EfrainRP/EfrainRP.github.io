import { useState, useEffect } from 'react'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Oculta el header si el usuario baja
            setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 px-6 md:px-12">
    //         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
    //             {/* Imagen o ícono */}
    //             <img
    //             src="https://avatars.githubusercontent.com/u/1?v=4"
    //             alt="Foto de perfil"
    //             className="w-32 h-32 rounded-full border-4 border-white shadow-md"
    //             />
    //             {/* Información */}
    //     <div className="text-center md:text-left">
    //       <h1 className="text-4xl font-extrabold">Efraín Rodríguez</h1>
    //       <p className="mt-2 text-lg text-white/90">
    //         Desarrollador web full stack con pasión por el diseño limpio y el código elegante.
    //       </p>

    //       {/* Botones */}
    //       <div className="mt-4 flex justify-center md:justify-start gap-4">
    //         <a
    //           href="#contacto"
    //           className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
    //         >
    //           Contáctame
    //         </a>
    //         <a
    //           href="https://github.com/tuusuario"
    //           target="_blank"
    //           className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-blue-600 transition"
    //           rel="noopener noreferrer"
    //         >
    //           GitHub
    //         </a>
    //       </div>
    //     </div>
    //         </div>
    //     </header>

    return (
        // <header className="bg-gradient-to-r from-gray-800 to-black text-white py-6 px-6 md:px-12">
        //     <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        //         <span>Efrain</span>
        //         <nav className="flex justify-between items-center">
        //             <a href="/" className="p-2 bg-blue-500 rounded-xl hover:bg-sky-700">Home</a>
        //             <a href="#about" className="p-2 bg-blue-500 rounded-xl hover:bg-sky-700">About</a>
        //             <a href="#contact" className="p-2 bg-blue-500 rounded-xl hover:bg-sky-700">Contact</a>
        //         </nav>
        //     </div>
        // </header>
        <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo o nombre */}
                <h1 className="text-xl font-bold text-blue-600">Mi Portafolio</h1>

                {/* Botón para móviles */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
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

                {/* Menú */}
                <nav
                    className={`${menuOpen ? 'block' : 'hidden'
                        } md:flex md:items-center md:space-x-6 absolute md:static bg-white left-0 top-full w-full md:w-auto md:bg-transparent p-4 md:p-0`}
                >
                    <a href="#inicio" className="block py-2 text-gray-700 hover:text-blue-600">
                        Inicio
                    </a>
                    <a href="#sobre-mi" className="block py-2 text-gray-700 hover:text-blue-600">
                        Sobre mí
                    </a>
                    <a href="#proyectos" className="block py-2 text-gray-700 hover:text-blue-600">
                        Proyectos
                    </a>
                    <a href="#contacto" className="block py-2 text-gray-700 hover:text-blue-600">
                        Contacto
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
