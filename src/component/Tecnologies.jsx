export default function Tecnologies() {
    const front = [
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "MaterialUI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
        },
        {
            name: "TAILWIND CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        },
        
    ];

    const back = [
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Prisma",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
    ];

    const devOps = [
        {
            name: "Postman",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
            name: "Railway",
            icon: "https://railway.com/brand/logo-dark.svg",
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
            name: "Qt",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
        },
    ];

    const language = [
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
            name: "C",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        },
        {
            name: "C++",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
            name: "Arduino",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
        },
        {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
            name: "C#",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        },
        {
            name: "Jupyter",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
        },
    ];

    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white text-center text-gray-800 animate-fade-in">
            <h1 className="text-3xl font-bold">Frontend Development</h1>
            {/* <hr className="border-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-8"/> */}
            <hr className="border-t-3 border-blue-500 w-1/9 mx-auto my-6 rounded mb-8"/>
            <div className="flex flex-wrap gap-6 justify-center">
                {front.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-120 transition-transform duration-200 w-40"
                    >
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-3xl font-bold mt-12">Backend & Database</h1>
            <hr className="border-t-3 border-blue-500 w-1/9 mx-auto my-6 rounded mb-8"/>
            <div className="flex flex-wrap gap-6 justify-center">
                {back.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-120 transition-transform duration-200 w-40"
                    >
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl font-bold mt-12">DevOps & Deployment</h1>
            <hr className="border-t-3 border-blue-500 w-1/9 mx-auto my-6 rounded mb-8"/>
            <div className="flex flex-wrap gap-6 justify-center">
                {devOps.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-120 transition-transform duration-200 w-40"
                    >
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl font-bold mt-12">Others Languages</h1>
            <hr className="border-t-3 border-blue-500 w-1/9 mx-auto my-6 rounded mb-8"/>
            <div className="flex flex-wrap gap-6 justify-center">
                {language.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-120 transition-transform duration-200 w-40"
                    >
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
            
            {/* <h1 className="text-3xl font-bold mb-8">Design & Creative Tools</h1> */}
        </section>
    );
}
