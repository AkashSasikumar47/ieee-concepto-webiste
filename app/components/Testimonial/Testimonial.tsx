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
                            "CONCEPTO is an annual highlight for me! The Ideathon inspires creativity, and I've won prizes that have boosted my innovative spirit."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Neha Sharma</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "CONCEPTO is not just an event; it's an experience. The practical knowledge and networking opportunities are unmatched, making it a must-attend."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Rajesh Patel</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "Participating in CONCEPTO as a student was a turning point. The mentorship and vibrant innovator community helped me shape my ideas."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Priya Kapoor</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "CONCEPTO sets a high standard with its quality of speakers. The insights gained here have been instrumental in my future projects."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Arjun Gupta</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
