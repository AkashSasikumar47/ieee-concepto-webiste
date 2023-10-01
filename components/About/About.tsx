import React from 'react';

const About = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full px-4 md:px-[32px] py-3 flex flex-col md:flex-row justify-start items-center gap-16">
                <div className="w-full md:w-[676px] text-4xl md:text-6xl font-extrabold font-['Plus Jakarta Sans'] text-center">Discover IEEE SRMIST Student Branch</div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full p-3">
                        <div className="text-2xl md:text-4xl font-extrabold font-['Plus Jakarta Sans']">Introduction to IEEE SB SRM</div>
                        <div className="text-base md:text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">IEEE SB SRM is the student chapter of the global IEEE organization at SRM Institute of Science and Technology. We're dedicated to promoting innovation and academic excellence among our members.</div>
                    </div>
                    <div className="w-full p-3">
                        <div className="text-2xl md:text-4xl font-extrabold font-['Plus Jakarta Sans']">Mission and Value</div>
                        <div className="text-base md:text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">Our mission is to inspire, educate, and empower the next generation of engineers and innovators. We value innovation, education, community, and excellence.</div>
                    </div>
                    <div className="w-full p-3">
                        <div className="text-2xl md:text-4xl font-extrabold font-['Plus Jakarta Sans']">History</div>
                        <div className="text-base md:text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">Established in [year], IEEE SB SRM has a history of fostering talent and technological advancement. We've organized impactful events and initiatives for our engineering community.</div>
                    </div>
                    <div className="w-full p-3">
                        <div className="text-2xl md:text-4xl font-extrabold font-['Plus Jakarta Sans']">Benefits of IEEE Membership</div>
                        <div className="text-base md:text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">Join IEEE to access a world of resources, networking, and professional development opportunities. Stay ahead in the field of technology with our global network.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;