import React from 'react';

const Testimonial = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center py-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black">Participant Testimonials</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "CONCEPTO-23 was a game-changer for me! The sessions were incredibly insightful, and I left with a renewed sense of innovation and inspiration."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Neha Sharma</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "I've attended many events, but CONCEPTO-23 stands out. It provided me with practical knowledge, and the networking opportunities were invaluable."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Rajesh Patel</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "As a student, CONCEPTO-23 was an eye-opener. The mentors were fantastic, and I felt like I was part of a vibrant community of innovators."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Priya Kapoor</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "The quality of speakers at CONCEPTO-23 was impressive. I gained valuable insights that I can apply to my future projects."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Arjun Gupta</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
