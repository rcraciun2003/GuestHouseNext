import React from "react";

interface GalleryItem {
    id: number;
    image: string;
    title: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
    {
        id: 2,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
    {
        id: 3,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
    {
        id: 4,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
    {
        id: 5,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
    {
        id: 6,
        image: "despre1.jpg",
        title: "Wool Runner 2",
    },
];

const Gallery: React.FC = () => {
    return (
        <section className="w-full min-h-screen" id="gallery">
            <h1 className="text-3xl md:text-4xl text-center font-bold p-6">Galerie</h1>
            <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                {galleryItems.map((item) => (
                    <div key={item.id} className="h-full w-full flex flex-col border rounded-md">
                        <div className="h-full w-full bg-gray-50 rounded-md overflow-hidden">
                            <div className="h-[90%] w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="bg-cover hover:opacity-80 rounded-t-md hover:scale-110 transform transition duration-300 overflow-hidden"
                                />
                            </div>
                            <div className="px-4 justify-center">
                                <p className="text-base mt-3 text-primary text-center font-bold">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
