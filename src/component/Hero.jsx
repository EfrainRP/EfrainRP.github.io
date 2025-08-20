
export default function Hero({className='pt-30 pb-15', animate='animate-fade-down', wPhoto='w-62 h-62', classNameTittle='mt-6 text-4xl', button}) {

    return (
        <section className={`${className} bg-gradient-to-b from-blue-200 to-white ${animate}`}>
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left max-w-4xl mx-2 md:mx-auto gap-0 md:gap-8">
                <img
                    src="myPhotos/formal.jpg"
                    alt="Avatar"
                    className={`${wPhoto} rounded-full shadow-lg mb-6 md:mb-0`}
                />
                <div>
                    <h1 className={`${classNameTittle} font-extrabold text-blue-700`}>Efrain Robles</h1>
                    <h2 className="mt-2 font-bold text-gray-800">
                        Computer Engineer | FullStack Developer | Dinosaur Fan 🦖 
                    </h2>
                    <p className="mt-2 text-lg text-gray-700">
                        Looking challenges to improve my logical and programming skills.
                    </p>
                    <div className="text-center flex gap-4 mt-5 justify-center items-center md:justify-start">
                        <a
                            href="https://www.linkedin.com/in/efrain-robles-pulido"
                            target="_blank"
                            className="inline-block bg-gray-500 text-white rounded hover:bg-gray-400 transition"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/EfrainRP"
                            target="_blank"
                            className="inline-block bg-gray-500 text-white rounded hover:bg-gray-400 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#000000" 
                                d="M12,2C6.48,2 2,6.58 2,12.26C2,16.74 4.87,20.52 8.84,21.78C9.34,21.87 9.5,21.55 9.5,21.27C9.5,21.02 9.49,20.39 9.49,19.7C6.73,20.34 6.14,18.42 6.14,18.42C5.68,17.29 5.03,16.97 5.03,16.97C4.12,16.34 5.1,16.36 5.1,16.36C6.1,16.43 6.63,17.48 6.63,17.48C7.5,19 8.97,18.55 9.54,18.27C9.63,17.6 9.9,17.14 10.2,16.89C7.94,16.63 5.58,15.76 5.58,11.9C5.58,10.8 5.97,9.91 6.64,9.22C6.53,8.96 6.17,7.87 6.74,6.41C6.74,6.41 7.59,6.12 9.49,7.42C10.29,7.18 11.15,7.06 12,7.06C12.85,7.06 13.71,7.18 14.51,7.42C16.41,6.12 17.26,6.41 17.26,6.41C17.83,7.87 17.47,8.96 17.36,9.22C18.03,9.91 18.42,10.8 18.42,11.9C18.42,15.77 16.06,16.62 13.8,16.88C14.19,17.2 14.54,17.85 14.54,18.84C14.54,20.3 14.53,21.39 14.53,21.27C14.53,21.55 14.69,21.87 15.19,21.78C19.16,20.52 22,16.74 22,12.26C22,6.58 17.52,2 12,2Z" 
                            />
                            </svg>
                        </a>
                        
                        <a 
                            // href="assets/EfrainRP"
                            className="inline-flex items-center gap-2 px-4 py-2 text-white rounded bg-gray-500 hover:bg-gray-400 transition"
                            href="C.V._Efrain_Robles.pdf"
                            target="_blank"
                        >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"/>
                            </svg>
                            See CV
                        </a>
                        {button}
                    </div>
                </div>
            </div>
        </section>
    );
}