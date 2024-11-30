import React from "react";

interface RestaurantSectionProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({
                                                                 image,
                                                                 title,
                                                                 description,
                                                                 link,
                                                             }) => {
    return (
        <section className="w-full min-h-screen bg-gray-100 py-16" id="restaurant">
            <div className="container mx-auto px-4">
                {/* Image Section */}
                <div className="w-full h-[80vh] z-10 relative">
                    <img
                        src={image}
                        alt="Restaurant Interior"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                        <div className="bg-gray-200 bg-opacity-50 rounded-lg p-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                            <p className="text-lg md:text-xl mb-6">{description}</p>
                            <a
                                href={link}
                                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                            >
                                See Our Menu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestaurantSection;
