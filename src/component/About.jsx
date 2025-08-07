export default function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto py-20 px-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">About me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    alt="Foto"
                    className="w-48 h-48 rounded-full shadow-md"
                />
                <p className="text-white-800 text-lg leading-relaxed text-justify">
                    I am a passionate and driven individual seeking
                    opportunities that chalenge me to grow and expand
                    my skils in programming and electronics.
                    With a strong sense of organization, responsibility, and a
                    colaborative mindset, I thrive in team environments
                    and enjoy tackling new chalenges.
                </p>
            </div>
        </section>
    );
}