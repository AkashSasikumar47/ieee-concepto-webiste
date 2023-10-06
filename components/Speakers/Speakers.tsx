import React from 'react';
import { useInView } from 'react-intersection-observer';

const speakersData = [
    {
        name: 'Speaker 1',
        photoSrc: '/Assets/Speakers/Speaker_1.png',
        description: 'Description for Speaker 1',
    },
    {
        name: 'Speaker 2',
        photoSrc: '/Assets/Speakers/Speaker_1.png',
        description: 'Description for Speaker 2',
    },
];

const Speakers = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust the threshold as needed
    });

    const sectionStyle = `
    .animate-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .animate-fade-in.animate-visible {
      opacity: 1;
      transform: translateY(0);
    }
    `;

    return (
        <section
            ref={ref}
            className={`bg-white text-black mb-16 ${inView ? 'animate-fade-in' : ''}`}
            style={{ background: 'white' }}
        >
            <style>{sectionStyle}</style>
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
                        <div key={i} className={`w-full max-w-452 p-4 flex flex-col justify-start items-center gap-4 ${inView ? 'animate-fade-in' : ''}`}>
                            <img
                                className="w-full h-auto rounded-3xl shadow border border-neutral-300"
                                src={speaker.photoSrc}
                                alt={`Speaker ${i + 1}`}
                            />
                            <div className="text-xl font-semibold leading-6 md:leading-7">{speaker.name}</div>
                            <div className="text-base md:text-lg font-normal font-sans leading-6 md:leading-7">{speaker.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
