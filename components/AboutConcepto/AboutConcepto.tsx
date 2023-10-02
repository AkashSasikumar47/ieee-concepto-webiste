import React from 'react';

const AboutConcepto = () => {
    return (
        <section className="bg-white py-16 mb-16 max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* Text Information */}
                <div className="max-w-screen-md md:w-1/2 mx-auto md:mr-4">
                    <div className="text-left md:text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">About CONCEPTO23</h2>
                        <div className="bg-white text-black">
                            <p className="text-base md:text-lg">
                                CONCEPTO23 is an annual event organized by IEEE SB SRM. It's your gateway to innovation, ideation, and a world of opportunities. Our mission is to nurture innovation, inspire minds, and provide a platform for learning and growth.
                            </p>
                            <p className="text-base md:text-lg mt-4">
                                Through a series of engaging sessions, inspiring speakers, and interactive workshops, CONCEPTO23 brings together students, professionals, and industry leaders to explore the latest trends, share insights, and spark creativity. Join us on this journey of innovation and discovery!
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
