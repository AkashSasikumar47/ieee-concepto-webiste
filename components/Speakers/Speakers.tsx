import React from 'react';

const Speakers = () => {
    return (
        <section className="bg-white text-black mb-16">
            <div className="w-full px-4 md:px-6 lg:px-0 max-w-screen-xl mx-auto py-3 flex flex-col md:flex-row justify-start items-center gap-16">
                <div className="w-full md:w-3/4 p-4 flex flex-col justify-start items-start gap-8">
                    <div className="text-3xl md:text-4xl font-semibold text-black">Meet our distinguished speakers</div>
                    <div className="text-base md:text-lg font-normal font-sans leading-6 md:leading-7">
                        During CONCEPTO23, our speakers will lead engaging sessions covering a wide range of topics, from cutting-edge technology trends to entrepreneurship. Stay tuned for detailed session schedules and topics to plan your experience at the event.
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Array.from({ length: 4 }, (_, i) => (
                        <div key={i} className="w-full max-w-452 p-4 flex flex-col justify-start items-center gap-4">
                            <img
                                className="w-full h-auto rounded-3xl shadow border border-neutral-300"
                                src="/Assets/Speakers/Speaker_1.png"
                                alt={`Speaker ${i + 1}`}
                            />
                            <div className="text-lg font-semibold font-sans leading-6 md:leading-7">NAME OF SPEAKER</div>
                            <div className="text-base md:text-lg font-normal font-sans leading-6 md:leading-7">Description</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
