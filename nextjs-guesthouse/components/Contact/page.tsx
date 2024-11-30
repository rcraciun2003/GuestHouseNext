import React from "react";

interface ContactSectionProps {
    address: string;
    email: string;
    phone: string;
    description: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
                                                           address,
                                                           email,
                                                           phone,
                                                       }) => {
    return (
        <section className="w-full " id="contact">
            <h1 className="text-title-xl text-center font-DM p-6">Contact</h1>
            <div className="py-16 bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        {/* Form Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                            <form action="#" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Telephone
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <div className="mt-1">
                      <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primarydarkened focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarydarker"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Details Section */}
                        <div className="mt-12 lg:mt-0">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                {/* Address */}
                                <div className="mb-8">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-gray-500 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM5 3h14v2H5zM5 7h14v2H5z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-lg font-medium text-gray-900">Address</div>
                                    </div>
                                    <div className="ml-8 mt-2 text-gray-600">{address}</div>
                                </div>

                                {/* Email */}
                                <div className="mb-8">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-gray-500 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12v6a2 2 0 002 2h2a2 2 0 002-2v-6M4 6h16M4 6v12a2 2 0 002 2h8M4 6l8 6 8-6"
                                            />
                                        </svg>
                                        <div className="ml-4 text-lg font-medium text-gray-900">Email address</div>
                                    </div>
                                    <div className="ml-8 mt-2 text-gray-600">
                                        <p>{email}</p>
                                    </div>
                                </div>

                                {/* Telephone */}
                                <div>
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-gray-500 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.05 5.95l2.83-2.83a3.482 3.482 0 014.95 0c1.37 1.37 1.37 3.59 0 4.95l-2.83 2.83c-.39.39-.9.57-1.41.5l-2.13-.26c-.81-.1-1.56-.51-2.12-1.07l-.29-.29a7.007 7.007 0 01-4.95 4.95l-.29-.29c-.56-.56-.97-1.31-1.07-2.12l-.26-2.13c-.07-.51.11-1.02.5-1.41l2.83-2.83c.39-.39.91-.58 1.41-.5l2.13.26c.81.1 1.56.51 2.12 1.07l.29.29a7.007 7.007 0 014.95-4.95l.29.29c.56.56.97 1.31 1.07 2.12l.26 2.13c.07.51-.11 1.02-.5 1.41z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-lg font-medium text-gray-900">Telephone</div>
                                    </div>
                                    <div className="ml-8 mt-2 text-gray-600">
                                        <p>{phone}</p>
                                        <p>Monday to Friday 9am - 7pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
