import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black mt-16">
            <div className="w-full w-[1920px] px-4 px-84 py-3 flex flex-col justify-start items-center gap-6">
                <a href="/">
                    <img className="w-[720px] h-[100px]" src="/Assets/Logo/Footer_logo.svg" alt="Footer Logo" />
                </a>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <a href={`mailto:ieee@srmist.edu.in`}>
                        <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans']">
                            Email: ieee@srmist.edu.in
                        </div>
                    </a>
                    <a href={`tel:+917674976687`}>
                        <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans']">
                            Phone: +91 76749 76687
                        </div>
                    </a>
                    <a href="https://instagram.com/ieeesrmist?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                        <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans']">
                            Instagram
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ieeesrmist?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <div className="text-center text-blue-700 text-base font-semibold font-['Plus Jakarta Sans']">
                            Facebook
                        </div>
                    </a>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <a href="/"> {/* Link to the homepage */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Home</div>
                    </a>
                    <a href="/About"> {/* Link to the About page */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">About</div>
                    </a>
                    <a href="/Mentors"> {/* Link to the About page */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Mentors</div>
                    </a>
                    <a href="/Contact"> {/* Link to the Contact page */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Contact</div>
                    </a>
                    <a href="https://forms.gle/yeQDynfTv4P8eFWx9" target="_blank" rel="noopener noreferrer">
                        {/* Register button with a link to the registration form */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Register</div>
                    </a>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row">
                    <a href="/privacy-policy"> {/* Link to the Privacy Policy */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Privacy Policy</div>
                    </a>
                    <a href="/terms-and-conditions"> {/* Link to the Terms & Conditions */}
                        <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">Terms & Conditions</div>
                    </a>
                </div>
                <div className="self-stretch px-6 md:px-32 justify-center items-center gap-8 inline-flex flex-col md:flex-row mb-8">
                    <div className="text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">
                        © IEEE SRMIST Student Branch
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
