import React from "react";

interface Room {
    id: number;
    image: string;
    price: string;
    title: string;
    description: string;
    features: { name: string; icon: string }[];
}

const rooms: Room[] = [
    {
        id: 1,
        image: "despre1.jpg",
        price: "120 lei",
        title: "Camera dublă",
        description:
            "Bucurați-vă de o ședere relaxantă și confortabilă în camera noastră dublă, perfectă pentru două persoane. Camera este elegant mobilată și dotată cu facilități moderne, menite să vă ofere tot confortul de care aveți nevoie.",
        features: [
            { name: "Aer condiționat", icon: "fas fa-snowflake" },
            { name: "Wi-Fi Gratuit", icon: "fas fa-wifi" },
            { name: "Televizor cu ecran plat", icon: "fas fa-tv" },
            { name: "Baie privată", icon: "fas fa-bath" },
            { name: "Balcon", icon: "fas fa-balance-scale" },
        ],
    },
    {
        id: 2,
        image: "despre2.jpg",
        price: "120 lei",
        title: "Camera dublă",
        description:
            "Bucurați-vă de o ședere relaxantă și confortabilă în camera noastră dublă, perfectă pentru două persoane. Camera este elegant mobilată și dotată cu facilități moderne, menite să vă ofere tot confortul de care aveți nevoie.",
        features: [
            { name: "Aer condiționat", icon: "fas fa-snowflake" },
            { name: "Wi-Fi Gratuit", icon: "fas fa-wifi" },
            { name: "Televizor cu ecran plat", icon: "fas fa-tv" },
            { name: "Baie privată", icon: "fas fa-bath" },
            { name: "Balcon", icon: "fas fa-balance-scale" },
        ],
    },
    {
        id: 3,
        image: "despre1.jpg",
        price: "120 lei",
        title: "Camera dublă",
        description:
            "Bucurați-vă de o ședere relaxantă și confortabilă în camera noastră dublă, perfectă pentru două persoane. Camera este elegant mobilată și dotată cu facilități moderne, menite să vă ofere tot confortul de care aveți nevoie.",
        features: [
            { name: "Aer condiționat", icon: "fas fa-snowflake" },
            { name: "Wi-Fi Gratuit", icon: "fas fa-wifi" },
            { name: "Televizor cu ecran plat", icon: "fas fa-tv" },
            { name: "Baie privată", icon: "fas fa-bath" },
            { name: "Balcon", icon: "fas fa-balance-scale" },
        ],
    },
    // Add more rooms here...
];

const Rooms: React.FC = () => {
    return (
        <section className="w-full min-h-screen" id="rooms">
            <div className="snap-start w-full bg-gray-200 p-4 md:p-10 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl text-center font-bold p-6">
                    Camere
                </h1>

                {rooms.map((room, index) => (
                    <div
                        key={room.id}
                        className={`w-full max-w-screen-2xl mx-auto bg-primary rounded-xl flex flex-col md:flex-row mb-8 md:mb-0 ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                        {/* Room Image */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                            <div className="p-4">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full md:w-10/12 object-cover rounded-lg border-4 border-gray-300 shadow-lg"
                                />
                                <p className="text-gray-800 text-lg md:text-xl p-6">
                  <span className="text-primary-dark text-xl md:text-2xl p-2">
                    {room.price}
                  </span>{" "}
                                    / noapte
                                </p>
                            </div>
                        </div>

                        {/* Room Description */}
                        <div className="md:w-1/2 flex flex-col text-right p-6 bg-gray-100 rounded-xl shadow-lg">
                            <div className="w-full md:w-10/12 border-2 border-gray-300 ml-auto my-auto p-10 h-auto bg-white rounded-xl shadow-md">
                                <p className="text-primary-dark text-lg md:text-xl p-2 font-bold">
                                    {room.title}
                                </p>
                                <p className="text-gray-800 text-base md:text-lg p-2">
                                    {room.description}
                                </p>
                                <ul className="text-gray-700">
                                    {room.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="mb-2 flex flex-row justify-end items-center px-2 gap-2"
                                        >
                                            {feature.name}{" "}
                                            <i className={`${feature.icon} text-primary-dark`}></i>
                                        </li>
                                    ))}
                                </ul>
                                <div className="py-4 px-2">
                                    <a
                                        href="/contact"
                                        className="px-4 py-2 rounded-xl bg-primarydarkened text-white hover:bg-primarydarkened-dark transition-colors"
                                    >
                                        Contactează-ne
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
