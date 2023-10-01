import React, { useEffect, useState } from 'react';

const Registration = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check window.innerWidth when the component mounts (client-side)
        setIsMobile(window.innerWidth <= 640);
        
        // Add event listener to update isMobile on window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="relative bg-white mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 mb-16">
            {/* Desktop Section */}
            {!isMobile && (
                <div className="hidden md:block relative rounded-xl overflow-hidden">
                    <video className="object-cover object-center w-full h-auto rounded-3xl" autoPlay loop muted controls={false}>
                        <source src="Assets/Videos/Registration_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-end">
                        <div className="text-white max-w-[400px] p-12 text-right">
                            <div className="text-3xl font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                            <div className="mt-4 px-4 py-2 bg-black rounded-[20.01px] shadow-lg inline-block">
                                <div className="text-xl font-semibold font-['Plus Jakarta Sans'] text-white">Register Now</div>
                            </div>
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
                    <div className="absolute inset-0 flex items-center justify-end text-white p-4">
                        <div>
                            <div className="text-lg font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                            <div className="mt-2 px-2 py-1 bg-black rounded-[10px] shadow-lg inline-block">
                                <div className="text-sm font-base font-['Plus Jakarta Sans'] text-white">Register Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Registration;
