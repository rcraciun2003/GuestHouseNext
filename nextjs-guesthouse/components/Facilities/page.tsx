import React from "react";

const Facilities: React.FC = () => {
    const facilities = [
        {
            title: "Wi-Fi gratuit",
            description:
                "Rămâi conectat cu internetul nostru de mare viteză gratuit disponibil în întregul hotel.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 20h.01" />
                    <path d="M2 8.82a15 15 0 0 1 20 0" />
                    <path d="M5 12.859a10 10 0 0 1 14 0" />
                    <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                </svg>
            ),
        },
        {
            title: "Suport 24/7",
            description:
                "Echipa noastră dedicată este disponibilă non-stop pentru a oferi asistență pentru orice nevoie.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12h6" />
                    <path d="M10 15h4" />
                    <path d="M12 9h.01" />
                </svg>
            ),
        },
        {
            title: "Camere Confortabile",
            description:
                "Bucurați-vă de camerele noastre spațioase și bine mobilate, concepute pentru confortul dumneavoastră.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 7h16" />
                    <path d="M4 10h16" />
                    <path d="M4 14h16" />
                    <path d="M10 18h4" />
                </svg>
            ),
        },
        {
            title: "Locație excelentă",
            description:
                "Hotelul nostru este situat într-o locație de primă clasă, cu acces ușor la principalele atracții.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 21s8-5 8-13-3.5-8-8-8-8 3.5-8 8 8 13 8 13z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
    ];

    return (
        <section
            className="w-full mx-auto items-center bg-primary py-10"
            id="facilities"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-5 mx-auto max-w-screen-2xl items-center justify-center">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className="bg-white card w-full sm:w-64 h-auto sm:h-64 shadow-xl mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
                    >
                        <div className="card-body p-4 items-center text-center justify-center">
                            <div className="w-16 h-16 bg-primary rounded-full p-3 shadow-2xl flex items-center justify-center mb-4">
                                {facility.icon}
                            </div>
                            <h2 className="card-title text-lg font-semibold text-primary">
                                {facility.title}
                            </h2>
                            <p className="text-sm text-gray-600 mt-2">{facility.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Facilities;
