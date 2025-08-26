import Layout from "../Layout.jsx";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <Layout className="bg-gradient-to-b from-gray-800 to-white">
            {/* <div className="max-w-4xl mx-auto px-6 py-16 bg-gradient-to-b from-gray-800 to-white text-gray-800 mt-12"> */}
            <div className="max-w-4xl mx-auto mt-25 mb-15 animate-slideLeft ">
                <h2 className="text-3xl font-bold text-center mt-25 mb-10 transition-all duration-400 hover:scale-[1.18]">Education</h2>

                <div className="max-w-4xl space-y-8 px-6 mx-auto text-gray-800">
                    {/* CUCEI */}
                    <motion.div
                        className="realtive bg-blue-300/80 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    >
                        <div className="flex items-center gap-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Escudo_CUCEI.svg"
                                alt="CUCEI"
                                className="w-28 h-28 object-contain"
                            />
                            <div className="bg-white/65 rounded-lg py-1 px-5">
                                <h3 className="text-lg md:text-2xl font-bold">Computer Engineering</h3>
                                <p className="text-sm text-gray-700 font-semibold mt-1">
                                    Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)
                                </p>
                                <p className="text-sm text-gray-500 ">
                                    2020 – 2025
                                </p>
                                <p className="text-sm text-gray-500">GPA 9.9</p>

                            </div>
                        </div>
                        <p className="text-gray-500 text-justify mt-2 px-2 bg-white/65 rounded-lg">
                            I am learning about computer systems, programming, and software development. My studies have provided me with a solid foundation in computer science principles and practical skills in various programming languages and technologies.
                        </p>
                    </motion.div>

                    {/* CETI */}
                    <motion.div
                        className="realtive bg-blue-300/80 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    >

                        <div className="flex items-center gap-4 md:gap-8 ">
                            <img
                                className="w-20 h-auto object-contain rounded-full"
                                alt="CETI Colomos"
                                    src="data:image/png;base64,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"
                            />
                            <div className="bg-white/65 rounded-lg py-1 px-5">
                                <h3 className="text-lg md:text-2xl font-bold">
                                    Automatic Control & Instrumentation Technologist
                                </h3>
                                <p className="text-sm text-gray-700 font-semibold mt-1">
                                    Centro de Enseñanza Técnica Industrial (CETI Colomos)
                                </p>
                                <p className="text-sm text-gray-500">
                                    2017 – 2020
                                </p>
                                <p className="text-sm text-gray-500">GPA 9.6</p>

                            </div>
                        </div>
                        <p className="text-gray-500 text-justify mt-2 px-2 bg-white/65 rounded-lg">
                            I completed my high school education with a focus on electronics and programming skills. During my time there, I developed automatitation projects, which I found fascinating and inspiring, leading me to pursue a career in computer engineering.
                        </p>

                    </motion.div>
                    <img 
                        alt='Dino studying'
                        className='w-50 rounded-lg mx-auto transition-transform duration-300 hover:scale-[1.05] shadow-lg shadow-black/70 hover:shadow-2xl' 
                        src='dinoStudying.gif'/>
                </div>
            </div>


            {/* <section id="about" className="max-w-6xl mx-auto py-15 px-4 animate-fade-in ">
                <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        I am <b>Computer Engineering</b> at CUCEI, where I am learning about computer systems, programming, and software development. My studies have provided me with a solid foundation in computer science principles and practical skills in various programming languages and technologies.
                    </p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Escudo_CUCEI.svg"
                        className="h-35 w-35 rounded-lg"
                        // shadow-xl dark:shadow-gray-800
                    />
                </div>                
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        I am <b>Automatic Control & Instrumentation Technologist</b>, where I completed my high school education with a focus on electronics and programming skills. During my time there, I developed automatitation projects, which I found fascinating and inspiring, leading me to pursue a career in computer engineering.
                    </p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/CETI_Logo.png/621px-CETI_Logo.png"
                        className="h-auto w-45 rounded-lg"
                        // shadow-xl dark:shadow-gray-800
                    />
                </div>                
            </section> */}
        </Layout>
    );
}
