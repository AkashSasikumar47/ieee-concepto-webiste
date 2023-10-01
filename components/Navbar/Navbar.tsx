import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white mb-6 md:mb-16">
            <div className="w-full w-[1920px] px-4 px-[84px] py-3 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <img className="w-[245.19px] h-[100px] mb-4 md:mb-0" src="/Assets/Logo/IEEE_Logo.png" alt="Logo" />

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                    <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Home</div>
                    <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">About</div>
                    <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Contact</div>
                </div>

                {/* Register Button */}
                <div className="mt-4 md:mt-0">
                    <div className="w-[157px] h-[50px] bg-black rounded-[20px] shadow-md text-white text-lg font-semibold font-['Plus Jakarta Sans'] flex items-center justify-center">
                        Register
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
