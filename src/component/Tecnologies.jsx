import front from "../assets/front.json";
import back from "../assets/back.json";
import devOps from "../assets/devOps.json";
import language from "../assets/language.json";

export default function Tecnologies() {
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
