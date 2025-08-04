export default function Hero() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white text-center animate-fade-in">
            <img
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="Avatar"
                className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-white"
            />
            <h1 className="mt-6 text-4xl font-extrabold text-blue-700">Efrain</h1>
            <p className="mt-2 text-lg text-gray-700">
                Computer Engineer | FullStack Developer <br />
                Looking challenges to improve my logical and programming skills.
            </p>
            <a
                href="https://www.linkedin.com/in/efrain-robles-pulido"
                target="_blank"
                className="mt-6 inline-block bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="35" height="35" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
            </a>
            <a
                href="https://github.com/EfrainRP"
                target="_blank"
                className="mt-6 inline-block text-white rounded hover:bg-blue-500 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000000" d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" />
                </svg>
            </a>
        </section>
    );
}