import React from 'react';

const Testimonial = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full px-4 md:px-32 py-3 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-[573px] text-[32px] md:text-[64px] font-extrabold font-['Plus Jakarta Sans'] text-center">Participant Testimonials</div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-3 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-gray-900 text-lg font-normal font-['Plus Jakarta Sans'] leading-[33px]">
                            "CONCEPTO23 was a game-changer for me. The insights I gained from the industry speakers and the hands-on experience in the competitions were invaluable. It's not just an event; it's a journey of growth and inspiration."
                        </div>
                        <div className="text-black text-xl md:text-2xl font-medium font-['Plus Jakarta Sans']">Sarah D, Engineering Student</div>
                    </div>
                    <div className="p-3 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-gray-900 text-lg font-normal font-['Plus Jakarta Sans'] leading-[33px]">
                            "I've attended CONCEPTO23 for the past three years, and each time, it gets better. The networking opportunities, the innovative ideas, and the sense of community make it a must-attend event for anyone passionate about technology and innovation."
                        </div>
                        <div className="text-black text-xl md:text-2xl font-medium font-['Plus Jakarta Sans']">John M, Tech Enthusiast</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
