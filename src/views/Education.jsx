import Layout from '../Layout.jsx';

export default function Education() {
    return (
        <Layout>
            <br /><br /><br />
            <section id="about" className="max-w-6xl mx-auto py-15 px-4 animate-fade-in ">
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
            </section>
        </Layout>
    );
}