import React from 'react';

const speakersData = [
    {
        name: 'Venkatakrishnan',
        photoSrc: '/Assets/Speakers/Speaker_1.png',
        description: 'An accomplished sales leader and visionary CEO at The Future Wall, driving innovation and value creation in the subscription-based Smart display network industry.',
    },
    {
        name: 'Srividya Rajgopal',
        photoSrc: '/Assets/Speakers/Speaker_3.png',
        description: 'Co-Founder & COO at Pauket',
    },
    {
        name: 'Arun Rahiah',
        photoSrc: '/Assets/Speakers/Speaker_4.png',
        description: 'Angel Investors CEO & Managing Partner at Billionaire Venture Capital',
    },
    {
        name: 'Rohan Kumar',
        photoSrc: '/Assets/Speakers/Speaker_2.png',
        description: 'Passionate entrepreneur, content creator, and podcast host dedicated to empowering students and inspiring positive change in the world.',
    },
];

const Speakers = () => {
    return (
        <section className="bg-white text-black mb-16" style={{ background: 'white' }}>
            <div className="w-full px-4 md:px-6 lg:px-0 max-w-screen-xl mx-auto py-3 flex flex-col md:flex-row justify-start items-center gap-16">
                <div className="w-full md:w-3/4 p-4 flex flex-col justify-start items-start gap-8">
                    <div className="text-3xl md:text-4xl font-semibold text-black">Meet Our Visionary Speakers</div>
                    <div className="text-base md:text-lg font-normal font-sans leading-6 md:leading-7">
                        Discover the voices shaping the future at CONCEPTO-23. Our lineup of visionary speakers brings expertise, insights, and inspiration to every session. Get ready to be captivated by their wisdom and innovation.
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map over the speakersData array to generate speaker cards */}
                    {speakersData.map((speaker, i) => (
                        <div key={i} className="w-full max-w-452 p-4 flex flex-col justify-start items-center gap-4">
                            <img
                                className="w-full h-auto rounded-3xl shadow border border-neutral-300"
                                src={speaker.photoSrc}
                                alt={`Speaker ${i + 1}`}
                            />
                            <div className="text-xl font-semibold leading-6 md:leading-7">{speaker.name}</div>
                            <div className="text-sm text-center md:text-sm font-normal font-sans leading-6 md:leading-7">{speaker.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
