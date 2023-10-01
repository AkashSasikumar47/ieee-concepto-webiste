import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white mb-6 md:mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src="/Assets/Logo/IEEE_Logo.png" alt="Logo" className="w-100 h-12" />
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
                    <div className="hidden md:flex space-x-6 text-black">
                        <a href="/about" className="text-black">About</a>
                        <a href="/contact" className="text-black">Contact</a>
                        <a href="/register" className="text-black">Register</a>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="text-black">
                            <a href="/about" className="block text-black py-2">About</a>
                            <a href="/contact" className="block text-black py-2">Contact</a>
                            <a href="/register" className="block text-black py-2">Register</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
