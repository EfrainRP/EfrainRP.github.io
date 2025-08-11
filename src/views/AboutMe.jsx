import Hero from '../component/Hero.jsx';
import Layout from '../Layout.jsx';
import Tecnologies from '../component/Tecnologies.jsx';

export default function AboutMe() {
    return (
        <Layout>
            <Hero />
            <section id="about" className="max-w-6xl mx-auto py-15 px-4 animate-fade-in ">
                <h2 className="text-3xl font-bold text-center mb-8">About me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        I love to learn new things that challenge me. I believe that curiosity is the key to success in any field, and I strive to understand  as much as I can.<br/><br/>
                        
                        I am a passionate full-stack developer with a strong foundation in computer science and a keen interest in automation and control systems. My academic background has equipped me with the skills to tackle complex problems and develop efficient algorithms.<br/>
                        I am eager to apply my knowledge in real-world projects and contribute to the field of software development, which allows me to improve my skills and grow my knowledge.<br/>
                    </p>
                    <img
                        src="myPhotos/informal2.jpg"
                        className="h-auto w-45 rounded-lg shadow-xl dark:shadow-gray-800"
                    />
                </div>
            </section>
            <Tecnologies/>
        </Layout>
    );
}