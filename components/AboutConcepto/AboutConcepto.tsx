import React, { useEffect, useState } from 'react';

const AboutConcepto = () => {
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
                        <source src="Assets/Videos/Concepto_Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left max-w-[500px]">
                            <div className="text-3xl font-bold font-['Plus Jakarta Sans']">
                                Welcome to CONCEPTO23, an annual event by IEEE SB SRM. We're your gateway to innovation and ideation.
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
                                <source src="Assets/Videos/Concepto_Video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-4 text-left max-w-[200px]">
                            <div className="text-xs font-medium font-['Plus Jakarta Sans']">
                                Welcome to CONCEPTO23, an annual event by IEEE SB SRM. We're your gateway to innovation and ideation.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutConcepto;
