import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
                <img
                    src="/assets/Img/Hero-image.jpg"
                    loading="lazy"
                    alt="CONCEPTO"
                    className="h-128 md:h-full w-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:items-end">
                <h1
                    className="font-bold text-black text-10xl md:text-12xl lg:text-14xl xl:text-15xl 2xl:text-16xl"
                    style={{
                        fontFamily: 'Triac',
                    }}
                >
                    CONCEPTO
                </h1>
            </div>
        </div>
    );
};

export default Hero;