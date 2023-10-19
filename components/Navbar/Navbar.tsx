import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white mb-6 md:mb-4">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <a href="/" className="hover:cursor-pointer">
                            <img src="/Assets/Logo/IEEE_Logo.png" alt="Logo" className="w-100 h-12" />
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="block text-gray-800 hover:text-black focus:text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6 bg-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-6 text-black items-center">
                        <a href="/About" className="text-black font-semibold">About</a>
                        <a href="/Mentors" className="text-black font-semibold">Mentors</a>
                        <a href="/Contact" className="text-black font-semibold">Contact</a>
                        <a href="/Gallery" className="text-black font-semibold">Gallery</a>

                        {/* Conditionally render the button for large screens */}
                        {!isMobileMenuOpen && (
                            <a
                                href="https://forms.gle/yeQDynfTv4P8eFWx9"
                                className="w-[137px] h-[47px] px-[32px] py-[16px] bg-black rounded-[14px] shadow-md inline-flex items-center justify-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] hover:bg-black transition duration-300 ease-in-out"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                REGISTER
                            </a>
                        )}
                    </div>
                </div>
                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="text-black">
                            <a href="/About" className="block text-black py-2">About</a>
                            <a href="/Mentors" className="block text-black py-2">Mentors</a>
                            <a href="/Contact" className="block text-black py-2">Contact</a>
                            <a href="/Gallery" className="block text-black py-2 mb-8">Gallery</a>
                            {/* Render the button inside the mobile menu */}
                            <a
                                href="https://forms.gle/yeQDynfTv4P8eFWx9"
                                className="w-[96px] h-[32px] px-[12px] py-[12px] bg-black rounded-[14px] shadow-md inline-flex items-center justify-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] hover:bg-black transition duration-300 ease-in-out"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                REGISTER
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
