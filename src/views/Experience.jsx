import Layout from "../Layout.jsx";
import { motion } from "framer-motion";
import Accordion from "../component/Accodation.jsx";

const experiencia = [
    {
        job: "Web Developer Intern",
        company: "DEXTRA ELECTRONIC",
        imgCompany: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCuHl8n7TAodRab70jMzo7APgcEJLpEgqJg&s",
        date: "2024 – Preset",
        tech: "Laravel, MySQL, PHP, JavaScript, HTML, CSS, Git, CPanel, Joomla, Laragon",
        description:
            "Manage and optimize a Laravel/MySQL e-commerce platform, implementing secure authentication, inventory management, customer–employee interaction features, and database optimizations, while developing custom plugins to meet evolving business needs.",
        plus: [
            {
                top: "Dragon Group, Mexico City",
                description:
                    "Develop an automated broadcasting workflow using MUSE Automator (Node.js), streamlining audio/video scene management, reducing manual intervention, and ensuring precise, client-specified playback.",
                image: {
                    img: "myPhotos/GroupDragon.jpg",
                    imgAlt: "Dragon Group",
                },
            },
        ],
        color: "bg-blue-500",
    },
    //   {
    //     job: "Desarrollador Backend",
    //     company: "Freelance",
    //     date: "2019 – 2021",
    //     description:
    //       "Creación de APIs REST, manejo de bases de datos y despliegue de proyectos en entornos en la nube.",
    //     color: "bg-purple-500",
    //   },
];

export default function Experience() {
    return (
        <Layout>
            {/* <br /><br /><br />
            <section id="about" className="max-w-6xl mx-auto py-15 px-4 animate-fade-in ">
                <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

                <h3 className="text-2xl font-bold mb-8">Dextra Electronic</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        Manage and optimize a Laravel/MySQL e-commerce platform, implementing secure authentication, inventory management, customer–employee interaction features, and database optimizations, while developing custom plugins to meet evolving business needs.
                    </p>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCuHl8n7TAodRab70jMzo7APgcEJLpEgqJg&s"
                        className="h-auto w-45 rounded-lg shadow-xl dark:shadow-gray-800"
                    />
                </div>
                <hr className="border-t-3 border-orange-500 w-1/20 mx-auto my-6 rounded mb-8"/>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <img
                        src="myPhotos/GroupDragon.jpg"
                        className="h-auto w-45 rounded-lg shadow-xl dark:shadow-gray-800"
                    />
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        Dragon Group, Mexico City – Develop an automated broadcasting workflow using MUSE Automator (Node.js), streamlining audio/video scene management, reducing manual intervention, and ensuring precise, client-specified playback.
                    </p>
                </div>
            </section> */}
            
            <section className="mt-5 py-20 bg-gradient-to-b from-gray-50 to-white text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Work Experience
                    </h2>

                    <div className="relative border-l border-gray-200">
                        {experiencia.map((item, index) => (
                            <motion.div
                                key={index}
                                className="mb-12 ml-6 relative"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                {/* Punto de la línea */}
                                <span
                                    className={`absolute w-4 h-4 ${item.color} rounded-full mt-15 -left-8 transition-colors duration-300`}
                                ></span>

                                {/* Card con efecto glass */}
                                <div className="backdrop-blur-md bg-white/40 border border-white/60 shadow-md rounded-xl p-5 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
                                    <div className="flex items-center mb-3">
                                        <img
                                            className='w-16 h-16 mx-5 rounded-full shadow-lg dark:shadow-gray-500'    
                                            src={item.imgCompany}
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.job}</h3>
                                            <p className="text-gray-500">{item.company}</p>
                                            <span className="text-sm text-gray-400">{item.date}</span>
                                            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                                {item.tech}
                                            </p>    
                                        </div>
                                    </div>
                                    
                                    <p className="mt-2 text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {item.plus && (
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
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* <motion.div {/* Card for upcoming position 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="mt-8 p-5 border border-dashed border-indigo-400 rounded-lg bg-indigo-50 text-indigo-700">
                        
                        <h3 className="text-lg font-semibold">Upcoming Position</h3>
                        <p className="mt-1 text-sm text-indigo-600">Start Date: October 2025</p>

                        <div className="mt-3">
                            <p className="text-base font-medium">Backend Developer</p>
                            <p className="text-sm">Company X — Process Automation Project</p>
                        </div>

                        <div className="mt-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-200 text-indigo-800 rounded-full">
                                Confirmed
                            </span>
                        </div>
                    </motion.div> */}

                </div>
            </section>
        </Layout>
    );
}
