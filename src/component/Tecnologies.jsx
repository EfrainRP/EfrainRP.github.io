export default function Tecnologies() {
    const technologies = [
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
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "C++",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
            name: "C",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        },
        {
            name: "Arduino",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
        },
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
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
        {
            name: "Postman",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
            name: "Qt",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
            name: "Railway",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
    ];

    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white text-center text-gray-800 animate-fade-in">
            <h1 className="text-3xl font-bold mb-8">Tecnologías</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-120 transition-transform duration-200 w-40"
                    >
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
