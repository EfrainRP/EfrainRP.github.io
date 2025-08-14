import React from 'react';
import { motion } from "framer-motion";
import Accordion from "../component/Accodation.jsx";

import Layout from '../Layout.jsx';
import Hero from '../component/Hero.jsx';


export default function Start() {
    return (
        <Layout>
            <section className="mt-5 py-20 bg-gradient-to-b from-gray-50 to-white text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        My Projects
                    </h2>

                    <div className="relative border-l border-gray-200">
                        <motion.div
                            className="mb-12 ml-6 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 * 0.15 }}
                            viewport={{ once: true }}
                        >

                            {/* Card con efecto glass */}
                            <div className="backdrop-blur-md bg-white/40 border border-white/60 shadow-md rounded-xl p-5 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
                                <div className="flex items-center mb-3">
                                    {/* <img
                                        className='w-16 h-16 mx-5 rounded-full shadow-lg dark:shadow-gray-500'    
                                        src={item.imgCompany}
                                    /> */}
                                    <div>
                                        <h3 className="text-lg font-semibold">AiSport - Tournaments Manager Web App</h3>
                                        {/* <span className="text-sm text-gray-400">2025</span> */}
                                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                            Developed a full-stack basketball tournament management platform with AI-powered performance analysis. Implemented interactive match brackets, real-time updates, and camera-based MLP-CNN player tracking for key metrics. Built a dynamic, user-friendly frontend in React.js, a secure and scalable Node.js/Express API backend, and integrated MySQL with Socket.IO for real-time synchronization. Delivered a seamless solution that streamlined tournament operations and elevated player performance analytics.
                                        </p>    
                                    </div>
                                </div>
                                <div className='flex space-x-4 justify-center'>
                                <a
                                    href="https://github.com/EfrainRP/AiSportFrontend.git"
                                    target="_blank"
                                    className="flex justify-center px-2 bg-blue-500 rounded hover:bg-gray-400 transition shadow-lg shadow-blue-500/50 hover:shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" 
                                        d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                    />
                                    </svg> 
                                    <span className="ml-2">Front-end</span>
                                </a>
                                <a
                                    href="https://github.com/EfrainRP/AiSportBackend.git"
                                    target="_blank"
                                    className="flex justify-center px-2 bg-yellow-500 rounded hover:bg-gray-400 transition shadow-lg shadow-yellow-500/50 hover:shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" 
                                        d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                    />
                                    </svg> 
                                    <span className="ml-2">Back-end</span>
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
                                {/* <p className="mt-2 text-gray-600 leading-relaxed">
                                    https://github.com/EfrainRP/AiSportFrontend.git
                                    https://github.com/EfrainRP/AiSportBackend.git
                                    https://github.com/StrangerPlay17/AiSport.git
                                </p> */}

                                {/* {item.plus && (
                                <div className="mt-4 p-3 bg-gray-100 rounded-lg mx-auto shadow-md">
                                    {item.plus.map((item, index) => (
                                        <Accordion title={item.top} key={index}>
                                            <p className="text-gray-500">{item.description}</p>
                                            {item.image && (
                                                <img
                                                    src={item.image.img}
                                                    alt={item.image.imgAlt}
                                                    className="mt-2 w-40 mx-2 h-auto rounded-lg shadow-sm"
                                                />
                                            )}
                                        </Accordion>
                                    ))} 
                                </div>
                                )} */}
                            </div>
                        </motion.div>
                        <motion.div
                            className="mb-12 ml-6 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 * 0.15 }}
                            viewport={{ once: true }}
                        >

                            {/* Card con efecto glass */}
                            <div className="backdrop-blur-md bg-white/40 border border-white/60 shadow-md rounded-xl p-5 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
                                <div className="flex items-center mb-3 md:justify-start">
                                    {/* <img
                                        className='w-16 h-16 mx-5 rounded-full shadow-lg dark:shadow-gray-500'    
                                        src={item.imgCompany}
                                    /> */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Optimal Route Finder</h3>
                                        {/* <span className="text-sm text-gray-400">2025</span> */}
                                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                            Built a Python application using OpenCV to process map images, detect obstacles, and determine the most efficient paths between predefined vertices. Implemented graph construction of viable routes and applied Prim’s Algorithm to identify optimal connections while avoiding obstructions. Combined image processing, graph theory, and optimization techniques to deliver precise and efficient route planning.
                                        </p>    
                                        <div className="flex items-center gap-4 flex-col md:flex-row justify-center mt-4 ">
                                            <img className="w-85 md:w-55 rounded-2xl shadow-xl/50 shadow-black-500/55 hover:scale-[1.3] transition-transform duration-300" src="myPhotos/Prim.png"/>
                                            <img className="w-85 md:w-55 rounded-2xl shadow-xl/50 shadow-green-500/55 hover:scale-[1.3] transition-transform duration-300" src="myPhotos/Prim2.png"/>
                                        </div>
                                    </div>
                                </div>
                                    <a
                                        href="https://github.com/EfrainRP/SeminarioDeAlgoritmia/tree/main/ACT9"
                                        target="_blank"
                                        className="w-30 mx-auto mt-8 flex justify-center px-2 bg-blue-500 rounded hover:bg-gray-400 transition shadow-lg shadow-blue-500/50 hover:shadow-lg"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" 
                                            d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                                        />
                                        </svg> 
                                        <span className="ml-2">Code</span>
                                    </a>
                                
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Hero py={'py-10 md:pt-10 md:pb-22'} wPhoto={'w-30'} textTitle='3'/>
        </Layout>
    );
}