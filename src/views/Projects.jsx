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
                                        <h3 className="text-lg font-semibold">hola</h3>
                                        <p className="text-gray-500">hola</p>
                                        <span className="text-sm text-gray-400">hola</span>
                                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                            hola
                                        </p>    
                                    </div>
                                </div>
                                
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    hola desc
                                </p>

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
                    </div>
                </div>
            </section>
            <Hero py={'py-10 md:pt-10 md:pb-22'} wPhoto={'w-30'} textTitle='3'/>
        </Layout>
    );
}