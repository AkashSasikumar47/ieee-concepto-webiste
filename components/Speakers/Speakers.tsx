import React from 'react';

const Speakers = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full px-4 md:px-[84px] py-3 flex flex-col md:flex-row justify-start items-center gap-16">
                <div className="w-full md:w-[600px] p-4 flex flex-col justify-start items-start gap-8">
                    <div className="text-4xl font-extrabold font-['Plus Jakarta Sans'] text-center">Meet our distinguished speakers</div>
                    <div className="text-lg font-medium font-['Plus Jakarta Sans'] leading-[33px]">
                        During CONCEPTO23, our speakers will lead engaging sessions covering a wide range of topics, from cutting-edge technology trends to entrepreneurship. Stay tuned for detailed session schedules and topics to plan your experience at the event.
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Array.from({ length: 4 }, (_, i) => (
                        <div key={i} className="w-full max-w-[452px] p-4 flex flex-col justify-start items-center gap-4">
                            <img
                                className="w-full h-auto rounded-3xl shadow border border-neutral-300"
                                src="/Assets/Speakers/Speaker_1.png"
                                alt={`Speaker ${i + 1}`}
                            />
                            <div className="text-lg font-bold font-['Plus Jakarta Sans'] leading-[33px]">NAME OF SPEAKER</div>
                            <div className="text-base font-medium font-['Plus Jakarta Sans'] leading-[33px]">Description</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
