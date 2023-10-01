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
                            "CONCEPTO23 was a game-changer for me. The insights I gained from the industry speakers and the hands-on experience in the competitions were invaluable. It's not just an event; it's a journey of growth and inspiration."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- Sarah D, Engineering Student</div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-lg">
                        <div className="text-lg md:text-xl font-semibold text-black mb-4">
                            "I've attended CONCEPTO23 for the past three years, and each time, it gets better. The networking opportunities, the innovative ideas, and the sense of community make it a must-attend event for anyone passionate about technology and innovation."
                        </div>
                        <div className="text-base md:text-lg font-normal text-gray-500">- John M, Tech Enthusiast</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
