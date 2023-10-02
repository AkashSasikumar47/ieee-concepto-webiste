import React, { useEffect, useState } from 'react';

const Hero = () => {
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
            <div className="relative h-[740px]">
                {/* Desktop Section */}
                {!isMobile && (
                    <div className="hidden md:block relative rounded-xl overflow-hidden h-[400px]">
                        <video className="object-cover object-center w-full h-full rounded-3xl" autoPlay loop muted controls={false}>
                            <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 flex flex-col items-left justify-center">
                            <div className="text-white p-8 text-left w-auto">
                                <div className="text-8xl font-extrabold font-['Plus Jakarta Sans']">
                                    CONCEPTO-23
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Right-side overlay elements */}
                <div className="w-full md:w-[826px] h-[740px] absolute top-0 right-0">
                    <img className="w-540 h-540 md:w-96 mt-64 md:mt-0 mx-auto md:right-20 md:top-48 absolute" src="Assets/Astronaut.svg" />

                    {/* Smaller Black Card with Countdown */}
                    <div className="bg-black rounded-2xl p-6 text-white absolute right-[10%] md:right-[140px] bottom-[36px] md:bottom-[10%]">
                        <h2 className="text-sm font-semibold mb-2">Event Countdown</h2>
                        <div id="countdown" className="text-xs font-bold">
                            <span id="days">00</span> days
                            <span id="hours">00</span> hours
                            <span id="minutes">00</span> minutes
                            <span id="seconds">00</span> seconds
                        </div>
                    </div>
                </div>

                {/* Information on the left */}
                <div className="p-6 max-w-[720px]">
                    <h1 className="text-2xl md:text-4xl font-bold font-['Plus Jakarta Sans'] text-black mb-4">
                        Welcome to <strong>CONCEPTO23</strong>
                        <br />Unleash Innovation!
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Discover a world of opportunities, learn from industry experts, and unlock your inner techie.
                    </p>
                    <a href="#" className="text-blue-500 underline mt-4 inline-block">Learn More</a>
                </div>
            </div>

            {isMobile && (
                <div className="md:hidden relative">
                    <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-xl">
                        <div className="video-container">
                            <video className="object-cover object-center w-full h-full rounded-xl" autoPlay loop muted controls={false}>
                                <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left">
                            <div className="text-3xl font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
