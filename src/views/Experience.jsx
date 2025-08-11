import Layout from '../Layout.jsx';

export default function Experience() {
    return (
        <Layout>
            <br /><br /><br />
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
                        src="GroupDragon.jpg"
                        className="h-auto w-45 rounded-lg shadow-xl dark:shadow-gray-800"
                    />
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        Dragon Group, Mexico City – Develop an automated broadcasting workflow using MUSE Automator (Node.js), streamlining audio/video scene management, reducing manual intervention, and ensuring precise, client-specified playback.
                    </p>
                </div>
            </section>
        </Layout>
    );
}