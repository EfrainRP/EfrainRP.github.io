export default function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto py-20 px-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre mí</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    alt="Foto"
                    className="w-48 h-48 rounded-full shadow-md"
                />
                <p className="text-white-800 text-lg leading-relaxed">
                    Soy desarrollador web y de aplicaciones con pasión por crear soluciones digitales limpias y efectivas. Me especializo en React, Node.js y el diseño centrado en el usuario.
                </p>
            </div>
        </section>
    );
}