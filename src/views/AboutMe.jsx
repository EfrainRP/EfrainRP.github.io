import Hero from '../component/Hero.jsx';
import Layout from '../Layout.jsx';
import Tecnologies from '../component/Tecnologies.jsx';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <Layout>
            <Hero animate={'animate-fade-in'}
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
            <section id="about" className="max-w-6xl mx-auto py-15 px-4 animate-fade-in group">
                <h2 className="text-3xl font-bold text-center mb-8">About me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <p className="text-white-800 text-lg leading-relaxed text-justify">
                        I love to learn new things that challenge me. I believe that curiosity is the key to success in any field, and I strive to understand  as much as I can.<br/><br/>
                        
                        I am a passionate full-stack developer with a strong foundation in computer science and a keen interest in automation and control systems. My academic background has equipped me with the skills to tackle complex problems and develop efficient algorithms.<br/>
                        I am eager to apply my knowledge in real-world projects and contribute to the field of software development, which allows me to improve my skills and grow my knowledge.<br/>
                    </p>
                    <img
                        src="myPhotos/informal.jpg"
                        className="h-auto w-45 rounded-lg shadow-xl dark:shadow-gray-800 transition-transform duration-380 group-hover:scale-[1.1]"
                    />
                </div>
            </section>
            <Tecnologies/>
        </Layout>
    );
}