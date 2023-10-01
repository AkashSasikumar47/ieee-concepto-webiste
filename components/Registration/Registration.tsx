import React, { useEffect, useState } from 'react';

const Registration = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative bg-white mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 mb-16">
            {/* Desktop Section */}
            {!isMobile && (
                <div className="hidden md:block relative rounded-xl overflow-hidden">
                    <video className="object-cover object-center w-full h-[512px] rounded-3xl" autoPlay loop muted controls={false}>
                        <source src="Assets/Videos/Registration_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex flex-col items-center justify-start">
                        <div className="text-white p-8 text-center">
                            <div className="text-6xl font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                            <div className="mt-4"></div>
                            <button className="px-8 py-2 bg-black rounded-[20.01px] shadow-lg inline-block text-l font-semibold font-['Plus Jakarta Sans'] text-white">
                                REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Mobile Section */}
            {isMobile && (
                <div className="md:hidden relative">
                    <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-xl">
                        <div className="video-container">
                            <video className="object-cover object-center w-full h-full rounded-xl" autoPlay loop muted controls={false}>
                                <source src="Assets/Videos/Registration_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-start">
                        <div className="text-white p-8 text-center">
                            <div className="text-l font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                            <div className="mt-2 px-2 py-1 bg-black rounded-[8px] shadow-lg inline-block">
                                <div className="text-xs font-base font-['Plus Jakarta Sans'] text-white">REGISTER</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Registration;
