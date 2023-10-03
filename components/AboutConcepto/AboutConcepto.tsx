import React from 'react';

const AboutConcepto = () => {
    return (
        <section className="bg-white py-16 mb-16 max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* Text Information */}
                <div className="max-w-screen-md md:w-1/2 mx-auto md:mr-4">
                    <div className="text-left md:text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">About CONCEPTO-23</h2>
                        <div className="bg-white text-black">
                            <p className="text-base md:text-lg">
                                Welcome to CONCEPTO-23, your passport to the world of innovation and inspiration. We're all about fostering creativity, connecting you with industry trailblazers, and providing a platform for your personal and professional growth. With a vibrant community of thinkers, doers, and dreamers, CONCEPTO-23 is the place to unlock your potential. Join us and seize the opportunity to innovate, learn, and shape a brighter future.                            </p>
                            <p className="text-base md:text-lg mt-4">
                                At CONCEPTO-23, we're not just an event; we're a catalyst for your journey towards greatness. It's time to take that bold step, explore uncharted territories, and ignite your passion for innovation. Register today and be part of an extraordinary experience that will leave you inspired, empowered, and ready to take on the world. Don't miss this chance – your innovation adventure starts here!                            </p>
                            <p className="text-base md:text-lg mt-4">
                                <a href="/about" className="text-blue-500 underline">Learn more about the event</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="max-w-screen-md md:w-1/2 mt-8 md:mt-0">
                    <img src="Assets/Planet.svg" alt="Concepto23 Image" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default AboutConcepto;
