import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full md:w-[1920px] h-[883px] px-4 md:px-[84px] py-3 flex flex-col md:flex-row justify-start items-center gap-2.5">
                <div className="w-full md:w-[1680px] h-[859px] relative">
                    <div className="w-[174px] h-[435px] left-[1311px] top-[322px] absolute bg-gray-500 bg-opacity-80 rounded-full blur-[134px]" />
                    <img className="w-full md:w-[1680px] h-[533px] left-0 top-0 absolute rounded-[40px]" src="https://via.placeholder.com/1680x533" alt="Image" />
                    <div className="w-full md:w-[701px] left-0 top-[573px] absolute text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">
                        Welcome to CONCEPTO23 - Unleash Innovation!<br />Join us in our annual celebration of innovation, technology, and ideation. Discover a world of opportunities, learn from industry experts, and unlock your inner techie. Get ready for a journey that will spark your creativity and drive your passion for innovation. Let's innovate together!
                    </div>
                    <div className="left-0 top-[770px] absolute text-black text-2xl font-semibold font-['Plus Jakarta Sans'] underline">Learn More</div>
                    <div className="w-full md:w-[704px] left-[64px] top-[198px] absolute text-black text-8xl font-extrabold font-['Plus Jakarta Sans']">CONCEPTO23</div>
                    <img className="w-full md:w-[767px] h-[767px] left-[1625px] top-[1px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/767x767" alt="Image" />
                    <div className="w-full md:w-[266px] h-[145px] left-[1338px] top-[325px] absolute">
                        <div className="w-full h-full left-0 top-0 absolute bg-white rounded-3xl shadow" />
                        <div className="left-[70px] top-[28px] absolute text-black text-lg font-semibold font-['Plus Jakarta Sans']">Exercising</div>
                        <div className="w-[193.17px] h-[44.47px] left-[36px] top-[80px] absolute" />
                    </div>
                    <div className="w-full md:w-[464px] h-[130px] left-[1024px] top-[729px] absolute">
                        <div className="w-full h-full left-0 top-0 absolute bg-black rounded-3xl shadow" />
                        <div className="left-[70px] top-[80px] absolute text-white text-2xl font-extrabold font-['Plus Jakarta Sans'] tracking-[12px]">352D 5H 49M 20S</div>
                        <div className="left-[70px] top-[29px] absolute text-white text-lg font-semibold font-['Plus Jakarta Sans']">Total time in space </div>
                        <div className="w-10 h-10 left-[20px] top-[20px] absolute bg-slate-400 rounded-xl" />
                    </div>
                    <div className="w-full md:w-[337px] h-[199px] left-[799px] top-[410px] absolute flex flex-col md:flex-row justify-start items-start">
                        <div className="w-full md:w-[337px] h-[199px] relative">
                            <div className="w-full h-full left-0 top-0 absolute bg-white rounded-3xl shadow" />
                            <div className="w-10 h-10 left-[20px] top-[20px] absolute bg-slate-400 rounded-xl" />
                            <div className="left-[70px] top-[29px] absolute text-black text-lg font-semibold font-['Plus Jakarta Sans']">Spacewalks</div>
                            <div className="w-[190.83px] h-[98.47px] left-[20px] top-[80px] absolute" />
                            <div className="w-[94.86px] h-[94.71px] left-[222px] top-[83px] absolute" />
                        </div>
                        <img className="w-[19.83px] h-[19.83px]" src="https://via.placeholder.com/20x20" alt="Icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
