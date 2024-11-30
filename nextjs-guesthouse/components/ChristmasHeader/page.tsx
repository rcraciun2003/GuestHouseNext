'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ChristmasHeader: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div>
            {/* Christmas Header */}
            <motion.section
                className="relative bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('craciun2.jpg')",
                    transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4">
                    <div className="space-y-6">
                        {/* Fade-in Animation for Title */}
                        <motion.h1
                            className="text-6xl font-extrabold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            Celebrate Christmas with Us 🎄
                        </motion.h1>

                        {/* Fade-in Animation for Paragraph */}
                        <motion.p
                            className="text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Join us for an unforgettable Christmas celebration at our hotel.
                            Enjoy festive treats, live music, and a magical atmosphere.
                        </motion.p>

                        {/* Button to Open Modal */}
                        <motion.button
                            onClick={toggleModal}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            View Menu & Music Details
                        </motion.button>
                    </div>
                </div>

                {/* Parallax Background */}
                <div
                    id="parallax-bg"
                    className="absolute inset-0 z-0 bg-fixed bg-center bg-cover h-full opacity-60"
                    style={{ backgroundImage: "url('/pink.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>

                {/* Snowfall Animation */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="snowflakes absolute top-0 left-0 w-full h-full overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="snowflake absolute bg-white rounded-full opacity-80 shadow-lg"
                                style={{
                                    width: `${Math.random() * 10 + 5}px`,
                                    height: `${Math.random() * 10 + 5}px`,
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${Math.random() * 5 + 5}s`,
                                    animationDelay: `${Math.random() * 5}s`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Christmas Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={toggleModal}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 transform transition-transform duration-300 scale-105"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl"
                            onClick={toggleModal}
                        >
                            &times;
                        </button>

                        {/* Christmas Header */}
                        <div className="text-center">
                            <motion.h2
                                className="text-4xl font-bold text-red-700 mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                🎄 Christmas Menu 🎄
                            </motion.h2>
                            <p className="text-lg text-green-600">
                                Celebrate the season with our special Christmas offerings!
                            </p>
                        </div>

                        {/* Decorative Border */}
                        <div className="w-full h-1 bg-gradient-to-r from-red-500 via-green-400 to-yellow-500 my-6"></div>

                        {/* Content */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Festive Feast */}
                            <div className="bg-red-100 border-l-4 border-red-400 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-red-600">Festive Feast</h3>
                                <p className="text-gray-700">
                                    Enjoy a traditional Christmas dinner with turkey, mashed
                                    potatoes, and stuffing.
                                </p>
                            </div>

                            {/* Sweet Delights */}
                            <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">
                                    Sweet Delights
                                </h3>
                                <p className="text-gray-700">
                                    Indulge in gingerbread cookies, fruitcake, and holiday pies.
                                </p>
                            </div>

                            {/* Drinks & Cocktails */}
                            <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-blue-600">
                                    Drinks & Cocktails
                                </h3>
                                <p className="text-gray-700">
                                    Warm up with mulled wine and Christmas-inspired cocktails.
                                </p>
                            </div>
                        </div>

                        {/* Decorative Christmas Elements */}
                        <div className="absolute -top-8 -left-8">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-lg border-4 border-yellow-300 animate-bounce"></div>
                        </div>
                        <div className="absolute -bottom-8 -right-8">
                            <div className="w-16 h-16 bg-green-400 rounded-full shadow-lg border-4 border-green-300 animate-bounce"></div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 text-center">
                            <motion.button
                                onClick={toggleModal}
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                            >
                                Reserve Your Spot 🎅
                            </motion.button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChristmasHeader;
