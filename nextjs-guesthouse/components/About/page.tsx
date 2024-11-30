import React from "react";

const About: React.FC = () => {
    return (
        <section
            className="h-screen w-full snap-mandatory snap-x overflow-x-auto"
            id="about"
        >
            <div className="snap-start flex flex-col md:flex-row max-w-screen-2xl mx-auto my-auto">
                {/* Left Side - Images */}
                <div className="relative w-full md:h-screen md:w-1/2 flex md:flex-col items-center mx-auto">
                    <img
                        src="despre1.jpg"
                        alt="Image 1"
                        className="p-4 lg:absolute lg:top-0 lg:left-40 w-full lg:w-2/3 h-auto object-cover z-10 lg:transform lg:translate-x-4 lg:translate-y-4 sm:p-10"
                    />
                    <img
                        src="despre2.jpg"
                        alt="Image 2"
                        className="absolute rounded-xl hidden lg:block lg:top-52 lg:left-0 w-1/2 h-auto object-cover z-10 transform translate-x-10 translate-y-10"
                    />
                    <img
                        src="despre3.jpg"
                        alt="Image 3"
                        className="absolute rounded-xl hidden lg:block lg:top-60 lg:left-72 w-1/3 h-auto object-cover z-10 transform translate-x-16 translate-y-16"
                    />
                </div>

                {/* Right Side - Text and Reservation */}
                <div className="md:w-1/2 md:h-screen flex flex-col items-center justify-center my-auto md:p-8">
                    <p className="mb-6 text-gray-600 text-lg md:text-xl">
                        Bine ati venit la Larana Camping
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-gray-800 animate-fadeIn">
                        Cel mai bun loc pentru relaxare!
                    </h1>
                    <p className="mb-6 w-full text-center text-lg md:text-xl text-gray-700">
                        Larana Camping Resort este un refugiu liniștit în mijlocul naturii,
                        ideal pentru iubitorii de natură și aventură. Situat într-un cadru
                        pitoresc.
                    </p>
                    <div className="flex flex-row items-center justify-center w-full lg:px-16">
                        <div className="w-full md:w-3/4 flex flex-col items-center justify-center mx-0">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                                Pentru rezervări
                            </h2>
                            <a
                                href="tel:+40765765765"
                                className="w-48 inline-block px-6 py-3 bg-primary text-white font-semibold text-lg rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                            >
                                +40 765 765 765
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
