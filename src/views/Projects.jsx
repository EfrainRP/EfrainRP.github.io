import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Accordion from "../component/Accodation.jsx";

import Layout from '../Layout.jsx';
import Hero from '../component/Hero.jsx';
import Carousel from '../component/Carousel.jsx';

export default function Start() {
    
    return (
        <Layout className='animate-fade-down'>
            <section className="mt-5 py-20 bg-gradient-to-b from-gray-800 to-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        My Projects
                    </h2>

                    <div className="relative border-gray-200 text-gray-800">
                        <motion.div
                            className="mb-12 ml-6 relative"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 * 0.15 }}
                            viewport={{ once: true }}
                        >

                            {/* Card con efecto glass */}
                            <div className="backdrop-blur-md bg-blue-300/80 shadow-md rounded-xl p-5 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
                                <div>
                                    <h3 className="text-lg font-semibold p-2 bg-white rounded-lg">AiSport - Basquet-Ball Tournaments Manager Web App</h3>
                                    {/* <span className="text-sm text-gray-400">2025</span> */}
                                    <Accordion title="Description" >
                                        <p className="text-sm text-gray-500 text-justify leading-relaxed ">
                                            Developed a full-stack basketball tournament management platform with AI-powered performance analysis. Implemented interactive match brackets, real-time updates, and camera-based MLP-CNN player tracking for key metrics. Built a dynamic, user-friendly frontend in React.js, a secure and scalable Node.js/Express API backend, and integrated MySQL with Socket.IO for real-time synchronization. Delivered a seamless solution that streamlined tournament operations and elevated player performance analytics.
                                        </p> 
                                        <img className="w-85 md:w-55 rounded-2xl shadow-xl/18 shadow-black-500/55 hover:scale-[1.1] transition-transform duration-300" src="myPhotos/modularAiSport.JPG"/>
                                    </Accordion>
                                </div>

                                <Carousel 
                                    images={['HTML5','CSS3','JavaScript','React','MaterialUI','Axios', 'Node.js','MySQL','Prisma','Git','Railway','Python', 'OpenCV']} 
                                    className='bg-blue-100 rounded-b-lg'
                                    children={<div className="px-5 py-2 text-sm text-gray-500 bg-blue-100 rounded-t-lg border-b border-black/20">Technologies used:</div>}
                                />
                                <div className='flex gap-2 md:gap-4 mt-2 justify-center'>
                                    <a
                                        href="https://github.com/EfrainRP/AiSportFrontend.git"
                                        target="_blank"
                                        className="flex justify-center items-center p-1 text-xs md:text-base bg-yellow-500 rounded transition shadow-lg shadow-yellow-500/50 hover:bg-gray-400 hover:shadow-gray-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 md:w-6' viewBox="0 0 24 24"><path fill="#000000" 
                                            d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                        />
                                        </svg> 
                                        <span className="ml-2 hidden md:block">FrontEnd</span>
                                        <span className="ml-2 sm:hidden">Front</span>
                                    </a>
                                    <a
                                        href="https://github.com/EfrainRP/AiSportBackend.git"
                                        target="_blank"
                                        className="flex justify-center items-center p-1 text-xs md:text-base bg-yellow-500 rounded transition shadow-lg shadow-yellow-500/50 hover:bg-gray-400 hover:shadow-lg hover:shadow-gray-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 md:w-6' viewBox="0 0 24 24"><path fill="#000000" 
                                            d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                        />
                                        </svg> 
                                        <span className="ml-2 hidden md:block">BackEnd</span>
                                        <span className="ml-2 sm:hidden">Back</span>
                                    </a>
                                    <a 
                                        className="flex justify-center items-center p-1 text-white text-xs md:text-base rounded bg-red-500 rounded transition shadow-red-400/50 shadow-lg hover:bg-gray-400 hover:shadow-gray-500"
                                        href="AiSportPDF.pdf"
                                        target="_blank"
                                    >
                                        <svg className="w-5 h-5 mr-2 inline-block text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                                            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"/>
                                        </svg>
                                        Doc
                                    </a>
                                    {/* <a
                                        href="https://github.com/StrangerPlay17/AiSport.git"
                                        target="_blank"
                                        className="mt-6 inline-block bg-gray-500 text-white rounded hover:bg-gray-400 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#000000" 
                                            d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                        />
                                        </svg>
                                    </a> */}
                                </div>
                                <a
                                        href="https://sites.google.com/academicos.udg.mx/proyectos-modulares-divtic/ing-computación?authuser=1#h.md58eqjjgejd"
                                        target="_blank"
                                        className="flex justify-center items-center mx-auto md:mx-65 p-1 text-xs md:text-base mt-3 bg-purple-400 rounded transition shadow-lg shadow-purple-400/50 hover:bg-gray-400  hover:shadow-gray-500"
                                    >
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Escudo_CUCEI.svg"
                                            alt="CUCEI"
                                            className="w-8 h-8 object-contain"
                                        />
                                        <span>Info on CUCEI</span>
                                    </a>
                            </div>
                        </motion.div>
                        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <motion.div
                            className="mb-12 ml-6 relative"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2 * 0.15 }}
                            viewport={{ once: true }}
                        >

                            {/* Card con efecto glass */}
                            <div className="backdrop-blur-md bg-blue-300/80 shadow-md rounded-xl p-5 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
                                <div>
                                    <h3 className="text-lg font-semibold p-2 bg-white rounded-lg">Optimal Route Finder</h3>
                                    {/* <span className="text-sm text-gray-400">2025</span> */}
                                    <Accordion title="Description" classNameChildren= "flex flex-col justify-between items-center py-2 bg-white">
                                        <p className="text-sm text-gray-500 text-justify leading-relaxed mb-2">
                                            Built a Python application using OpenCV to process map images, detect obstacles, and determine the most efficient paths between predefined vertices. Implemented graph construction of viable routes and applied Prim’s Algorithm to identify optimal connections while avoiding obstructions. Combined image processing, graph theory, and optimization techniques to deliver precise and efficient route planning.
                                        </p>  
                                        <div className="flex items-center gap-4 flex-col md:flex-row justify-center mb-4">
                                            <img className="w-85 md:w-55 rounded-2xl shadow-xl/32 shadow-black-500/55 hover:scale-[1.3] transition-transform duration-300" src="myPhotos/Prim.png"/>
                                            <img className="w-85 md:w-55 rounded-2xl shadow-xl/32 shadow-green-500/55 hover:scale-[1.3] transition-transform duration-300" src="myPhotos/Prim2.png"/>
                                        </div>
                                    </Accordion>
                                </div>
                                <Carousel 
                                    images={['Python', 'OpenCV']} 
                                    className='bg-blue-100 rounded-b-lg'
                                    children={<div className="px-5 py-2 text-sm text-gray-500 bg-blue-100 rounded-t-lg border-b border-black/20">Technologies used:</div>}/>

                                <a
                                    href="https://github.com/EfrainRP/SeminarioDeAlgoritmia/tree/main/ACT9"
                                    target="_blank"
                                    className="w-30 mx-auto mt-2 flex justify-center items-center p-1 text-xs md:text-base bg-yellow-500 rounded transition shadow-lg shadow-yellow-500/50 hover:bg-gray-400 hover:shadow-gray-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" 
                                        d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                    />
                                    </svg> 
                                    <span className="ml-2">Code</span>
                                </a>
                            </div>
                        </motion.div>
                        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <img 
                            className='w-36 md:w-40 rounded-3xl mx-auto transition-transform duration-300 hover:scale-[1.05] shadow-lg shadow-black/70 hover:shadow-2xl' 
                            alt='Rex Walk'
                            src='rex.gif'
                        />

                    </div>
                </div>
            </section>
            <Hero className={'py-10 md:pt-1 md:pb-5'} wPhoto={'w-30'} classNameTittle={'md:mt-6 2xl'} 
                button={
                    <Link
                        className="inline-flex items-center gap-2 px-4 py-2 text-white rounded bg-gray-500 hover:bg-gray-400 transition hover:shadow-lg hover:shadow-gray-400"
                        to="/contact"
                    >
                        <svg className="w-5 h-5 md:w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                        </svg>
                        Contact Me
                    </Link>
                }
            />
        </Layout>
    );
}