import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black mt-16">
            <div className="w-full w-[1920px] px-4 px-84 py-3 flex flex-col justify-start items-center gap-6">
                <img className="w-[245.19px] h-[100px]" src="/Assets/Logo/IEEE_Logo.png" alt="Footer Logo" />
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Email: ieee@srmist.edu.in</div>
                    <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Phone: 1234567890</div>
                    <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Instagram</div>
                    <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Facebook</div>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Home</div>
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">About</div>
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Contact</div>
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Register</div>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Privacy policy</div>
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans'] mb-2">Terms & Agreements</div>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">© IEEE SRMIST Student Branch</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
