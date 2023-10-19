import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const eventDate = new Date('2023-10-19T17:00:00'); // October 19, 2023, 5:00 PM
        const currentDate = new Date();
        const timeDifference = eventDate.getTime() - currentDate.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);

        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative bg-white mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 mb-16">
            <style>
                {`
                    .animate-fade-in {
                        opacity: 0;
                        animation: fadeIn 5s forwards;
                    }

                    @keyframes fadeIn {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                `}
            </style>

            <div className="relative h-[740px]">
                {/* Desktop Section */}
                {!isMobile && (
                    <div className="hidden md:block relative rounded-xl overflow-hidden h-[400px]">
                        <video className="object-cover object-center w-full h-full rounded-3xl" autoPlay loop muted>
                            {/* Add the 'autoPlay' attribute */}
                            <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 flex flex-col items-left justify-center">
                            <div className="text-white p-8 text-left w-auto animate-fade-in">
                                <div className="text-8xl font-extrabold font-['Plus Jakarta Sans']">
                                    CONCEPTO-23
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Rest of the component */}
                <div className="w-full md:w-[826px] h-[740px] absolute top-0 right-0">
                    <img className="w-540 h-540 md:w-96 mt-64 md:mt-0 mx-auto md:right-20 md:top-48 absolute" src="Assets/Astronaut.svg" />

                    {/* Smaller Black Card with Countdown */}
                    <div className="bg-black rounded-2xl p-6 text-white absolute right-[4%] md:right-[120px] bottom-[36px] md:bottom-[10%] animate-fade-in">
                        <h2 className="text-lg font-semibold mb-2">Event Ends</h2>
                        <div id="countdown" className="text-sm text-[#EDDAC5] font-semibold">
                            <span id="days">{timeRemaining.days.toString().padStart(2, '0')}</span>&nbsp;Days&nbsp;
                            <span id="hours">{timeRemaining.hours.toString().padStart(2, '0')}</span>&nbsp;Hours&nbsp;
                            <span id="minutes">{timeRemaining.minutes.toString().padStart(2, '0')}</span>&nbsp;Minutes&nbsp;
                            <span id="seconds">{timeRemaining.seconds.toString().padStart(2, '0')}</span>&nbsp;Seconds
                        </div>
                    </div>
                </div>

                {/* Information on the left */}
                <div className="p-6 max-w-[720px] animate-fade-in">
                    <h1 className="text-xl md:text-4xl font-bold font-['Plus Jakarta Sans'] text-black mb-4">
                        Welcome to <strong>CONCEPTO-23</strong>
                        <br />Your Gateway to Innovation
                    </h1>
                    <p className="text-gray-600 text-l md:text-xl leading-relaxed">
                        Join the Innovation Revolution - Register Today and Ignite Your Creative Potential!
                    </p>
                    <a href="https://forms.gle/yeQDynfTv4P8eFWx9" className="text-white bg-blue-500 rounded-full py-3 px-6 mt-4 inline-block text-center hover:bg-black transition duration-300 ease-in-out">
                        REGISTER
                    </a>
                </div>
            </div>

            {isMobile && (
                <div className="md:hidden relative">
                    <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-xl">
                        <div className="video-container">
                            <video className="object-cover object-center w-full h-full rounded-xl" autoPlay loop muted>
                                {/* Add the 'autoPlay' attribute */}
                                <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left">
                            <div className="text-3xl font-extrabold font-['Plus Jakarta Sans']">CONCEPTO-23</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
