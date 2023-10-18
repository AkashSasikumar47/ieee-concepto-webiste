import React, { useEffect, useState } from 'react';

const EventBanner = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const eventDate = new Date('2023-10-18T17:00:00'); // October 18, 2023, 5:00 PM
        const currentDate = new Date();
        const timeDifference = eventDate.getTime() - currentDate.getTime();

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
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

            <div className="relative h-[740px] mt-16">
                {/* Desktop Section */}
                {!isMobile && (
                    <div className="hidden md:block relative rounded-xl overflow-hidden h-[400px]">
                        <video className="object-cover object-center w-full h-full rounded-3xl" autoPlay loop muted>
                            <source src="/Assets/Videos/Banner_Video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 flex flex-col items-left justify-center">
                            <div className="text-white p-8 text-left w-auto animate-fade-in">
                                <div className="text-8xl font-extrabold font-sans">
                                    CONCEPTO-23
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full md:w-[826px] h-[740px] absolute top-0 right-0">
                    <img className="w-540 h-540 md:w-96 mt-64 md:mt-0 mx-auto md:right-20 md:top-48 absolute" src="/Assets/Astronaut.svg" />

                    {/* Smaller Black Card with Countdown */}
                    <div className="bg-black rounded-2xl p-6 text-white absolute right-[4%] md:right-[150px] bottom-[36px] md:bottom-[10%] animate-fade-in">
                        <h2 className="text-lg font-semibold mb-2">Event Ends</h2>
                        <div id="countdown" className="text-sm text-[#EDDAC5] font-semibold">
                            <span id="hours">{timeRemaining.hours.toString().padStart(2, '0')}</span>&nbsp;Hours&nbsp;
                            <span id="minutes">{timeRemaining.minutes.toString().padStart(2, '0')}</span>&nbsp;Minutes&nbsp;
                            <span id="seconds">{timeRemaining.seconds.toString().padStart(2, '0')}</span>&nbsp;Seconds
                        </div>
                    </div>
                </div>

                {/* Information on the left */}
                <div className="p-6 max-w-[720px] animate-fade-in">
                    <h1 className="text-xl md:text-4xl font-bold font-sans text-black mb-4 mt-12">
                        Welcome to <strong>CONCEPTO-23</strong>
                        <br />Your Gateway to Innovation
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        The Event is Starting Soon and Our Participants are Arriving!
                        <br />
                        Get Ready for an Exciting Day of Innovation and Creativity.
                    </p>
                </div>
            </div>

            {isMobile && (
                <div className="md:hidden relative">
                    <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-xl">
                        <div className="video-container">
                            <video className="object-cover object-center w-full h-full rounded-xl" autoPlay loop muted>
                                <source src="/Assets/Videos/Banner_Video.mov" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left">
                            <div className="text-3xl font-extrabold font-sans">CONCEPTO-23</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quiz Details Section 
            <div className="max-w-[720px] text-center mx-auto my-8 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-black mb-4">
                    Quiz Details
                </h2>
                <p className="text-xl text-gray-600">
                    Join our quiz at <a href="https://joinmyquiz.com/pro" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">joinmyquiz.com/pro</a>
                    <br />
                    Quiz ID: 925 585
                </p>
            </div> */}

            {/* Pizza Section */}
            {!isMobile && (
                <div className="hidden md:block relative rounded-xl overflow-hidden h-[400px]">
                    <video className="object-cover object-center w-full h-full rounded-3xl" autoPlay loop muted>
                        <source src="/Assets/Videos/PizzaBreak.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left w-auto animate-fade-in">
                            <div className="text-8xl text-red font-extrabold font-sans">
                                🍕 Enjoy Your Pizza Break! 🍕
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Information on the left */}
            <div className="p-6 max-w-[720px] animate-fade-in">
                <h1 className="text-xl md:text-4xl font-bold font-sans text-black mb-4 mt-12">
                    It's Pizza Time at <strong>CONCEPTO-23</strong>!
                    <br />Savor the Flavor of Innovation
                </h1>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    Take a moment to recharge, connect with fellow innovators, and prepare for an exciting afternoon of ideation and fun!
                </p>
            </div>
        </div>
    );
}

export default EventBanner;
