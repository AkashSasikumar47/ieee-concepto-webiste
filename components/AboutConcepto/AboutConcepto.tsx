import React from 'react';

const AboutConcepto = () => {
    const textStyle = {
        color: 'var(--text-black)', // Use your specific text color
        fontSize: '1.125rem', // Adjust font size as needed
        fontWeight: 'bold',
        fontFamily: 'Plus Jakarta Sans', // Specify your desired font family
        lineHeight: '33px', // Adjust line height as needed
    };

    return (
        <section className="bg-white mb-16">
            <div className="w-[1920px] h-[850px] px-[84px] py-3 flex-col justify-between items-center inline-flex">
                <div className="w-[1680px] h-[826px] relative">
                    <div className="w-[1680px] h-[533px] left-0 top-0 absolute">
                        <img
                            className="w-[1680px] h-[533px] left-0 top-0 absolute rounded-[40px]"
                            src="https://via.placeholder.com/1680x533"
                        />
                        <div className="w-[1220px] left-[230px] top-[80px] absolute text-center text-white text-[64px] font-extrabold font-['Plus Jakarta Sans']">
                            Welcome to CONCEPTO23, an annual event by IEEE SB SRM. We're your gateway to innovation and ideation.
                        </div>
                    </div>
                    <div className="w-[450px] h-[430px] px-4 py-6 left-[112px] top-[396px] absolute bg-white rounded-3xl shadow flex-col justify-start items-center gap-8 inline-flex">
                        <div className="w-[348px]" style={textStyle}>
                            Introduction & Purpose
                        </div>
                        <div className="w-[348px]" style={textStyle}>
                            <span>Introduction:</span>
                            <span>
                                Welcome to CONCEPTO23, where innovation thrives! We're the annual event by IEEE SB SRM dedicated to nurturing innovation and ideation.
                                <br />
                            </span>
                            <span>Purpose:</span>
                            <span>
                                CONCEPTO23 ignites innovation. Join us to explore new ideas, learn from experts, and unleash your potential.
                            </span>
                        </div>
                    </div>
                    <div className="w-[450px] h-[430px] px-4 py-6 left-[112px] top-[396px] absolute bg-white rounded-3xl shadow flex-col justify-start items-center gap-8 inline-flex">
                        <div className="w-[348px]" style={textStyle}>
                            Involvement & Themes
                        </div>
                        <div className="w-[348px]" style={textStyle}>
                            <span>Involvement:</span>
                            <span>
                                Industry leaders inspire at CONCEPTO23. Our speakers share insights, sparking your journey.
                                <br />
                            </span>
                            <span>Themes:</span>
                            <span>
                                Dive into real-world challenges with our exciting event themes.
                            </span>
                        </div>
                    </div>

                    <div className="w-[450px] h-[430px] px-4 py-6 left-[626px] top-[396px] absolute bg-white rounded-3xl shadow flex-col justify-start items-center gap-8 inline-flex">
                        <div className="w-[348px]" style={textStyle}>
                            Benefits & Skills
                        </div>
                        <div className="w-[348px]" style={textStyle}>
                            <span>Benefits:</span>
                            <span>
                                CONCEPTO23 offers networking, skill enhancement, and access to valuable resources.
                                <br />
                            </span>
                            <span>Skills:</span>
                            <span>
                                Develop teamwork, time management, and communication skills alongside technical know-how.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutConcepto;
