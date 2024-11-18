import React, { useState } from 'react';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const toggleQuestion = (questionId: number) => {
        if (openQuestion === questionId) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(questionId);
        }
    };

    const faqData = [
        {
            question: 'What is CONCEPTO Registration all about?',
            answer: 'CONCEPTO Registration is your gateway to an exceptional journey of concept and ideation. It\'s a carnival of opportunities presented by IEEE SRM Student Branch, offering a platform to showcase innovative ideas, understand business models, refine presentation skills, and unleash your techie potential. It\'s a two-day event designed to foster creativity, problem-solving, and innovation to address societal challenges.',
        },
        {
            question: 'What is the timeline for the CONCEPTO event?',
            answer: 'The CONCEPTO event spans two days: Day 1 focuses on exploring and creating, with sessions covering understanding business models, finding inspiration, interactive Q&A, networking, team building, and innovative thinking. Day 2 centers around presentation and excellence, with sessions on presentation tips, pitching essentials, refining pitches and presentations, pitching ideas to a panel, receiving feedback, and networking.',
        },
        {
            question: 'Is there a registration fee for the CONCEPTO event?',
            answer: 'Yes, IEEE SRM Student Branch is introducing registration fees for participants attending the CONCEPTO event. Individual registration is priced at only Rs. 99, and a team of two can register for only Rs. 149.',
        },
        {
            question: 'What can I expect from the CONCEPTO event?',
            answer: 'CONCEPTO offers a valuable space to share and develop your concepts, whether you have a concrete solution to a specific problem or a collection of ideas that could lead to meaningful innovations. It\'s an opportunity to enhance and explore your professional skills, engage with like-minded participants, receive expert recommendations on effective presentations and pitching, and present your ideas in a business setting. The event also provides networking opportunities and the chance to celebrate your achievements.',
        },
        {
            question: 'How can I register for the CONCEPTO event?',
            answer: 'To register for the CONCEPTO event, simply follow the registration process. You can register as an individual for Rs. 99 or as a team of two for Rs. 149. Click the "REGISTER" button on our homepage to get started and embark on this exciting journey of innovation and ideation.',
        },
        {
            question: 'What should I bring to the event?',
            answer: 'Please make sure to bring your laptop and charger to the event. These will be essential for your participation. We also recommend carrying any personal items you might need throughout the day.',
        },
        {
            question: 'Will refreshments be provided during the event?',
            answer: 'Yes, we will provide refreshments to keep you energized throughout the day. You can expect snacks and beverages during designated break times.',
        },
    ];


    return (
        <section className="bg-white py-16 mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`${openQuestion === index ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                                } p-6 rounded-3xl shadow-lg cursor-pointer`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-lg font-semibold">{item.question}</h3>
                                <span>{openQuestion === index ? '-' : '+'}</span>
                            </div>
                            {openQuestion === index && (
                                <p className="text-base md:text-sm mt-4">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
