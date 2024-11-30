import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-bgcolor text-gray-300 py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* Logo and Images */}
                    <div className="mb-8 lg:mb-0 w-full md:w-1/3">
                        <Image
                            src="/guest-house-logo.png"
                            alt="Guest House Logo"
                            className="mt-4 w-1/2"
                            width={200}
                            height={100}
                        />
                        <div className="flex space-x-4 mb-4">
                            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/SAL-PICTOGRAMA.png"
                                    alt="Image 1"
                                    width={100}
                                    height={100}
                                />
                            </a>
                            <a
                                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/SAL2-PICTOGRAMA.jpg"
                                    alt="Image 2"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8 lg:mb-0 w-full md:w-1/3">
                        <div className="flex items-center mb-4">
                            <svg
                                className="text-titlecolor"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 10l4.5-4.5M19.5 3H16L10 9l1.5 1.5 8.5-8.5H19.5zM13 10V3.5L3.5 13v6h6L13 10zm-1 1H4l-1 1v4h4l1-1V11zm-3 6v-3H5v3h4z"
                                />
                            </svg>
                            <p className="ml-3 text-textcolor">
                                444 S. Cedros Ave
                                <br />
                                Solana Beach, California
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg
                                className="text-titlecolor"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a7 7 0 0110.95 4.95L10 9.95A7 7 0 003 17a7 7 0 010-14zm2 2a5 5 0 1010 0 5 5 0 00-10 0z"
                                />
                            </svg>
                            <p className="ml-3 text-textcolor">+1.555.555.5555</p>
                        </div>
                        <div className="flex items-center">
                            <svg
                                className="text-titlecolor"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 7.89a5.978 5.978 0 006.417-1.775 5.978 5.978 0 00-1.775-6.417L8 3H6c-1.105 0-2 .895-2 2v3z"
                                />
                            </svg>
                            <p className="ml-3 text-textcolor">support@company.com</p>
                        </div>
                    </div>

                    {/* About the Company and Social Media */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-bold text-textcolor mb-4 md:text-right">
                            About the company
                        </h3>
                        <p className="text-sm mb-4 md:text-right text-textcolor">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>
                        <div className="flex space-x-4 md:justify-end">
                            <a href="#" className="hover:text-titlecolor">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="text-titlecolor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88V15.09H7.897v-3.09h2.541v-2.35c0-2.507 1.492-3.88 3.776-3.88 1.096 0 2.24.196 2.24.196v2.467h-1.26c-1.24 0-1.623.77-1.623 1.558v1.909h2.773l-.443 3.09H14.57v6.79C19.343 21.127 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-titlecolor">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="text-titlecolor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.6 12.27c0-2.554-2.076-4.63-4.63-4.63s-4.63 2.076-4.63 4.63 2.076 4.63 4.63 4.63 4.63-2.076 4.63-4.63zm-4.63 3.91a3.91 3.91 0 1 1 0-7.82 3.91 3.91 0 0 1 0 7.82zm5.643-7.07a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-titlecolor">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="text-titlecolor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2C6.486 2 2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.88V15.09H7.897v-3.09h2.541v-2.35c0-2.507 1.492-3.88 3.776-3.88 1.096 0 2.24.196 2.24.196v2.467h-1.26c-1.24 0-1.623.77-1.623 1.558v1.909h2.773l-.443 3.09H14.57v6.79C19.343 21.127 22 16.991 22 12c0-5.514-4.486-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
