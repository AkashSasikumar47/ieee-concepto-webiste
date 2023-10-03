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
            question: 'How can I register for CONCEPTO-23?',
            answer: 'To register for CONCEPTO-23, simply click the "REGISTER" button on our homepage, fill out the registration form, and complete the payment process. You\'ll receive a confirmation email once your registration is successful.',
        },
        {
            question: 'What is the registration fee for the event?',
            answer: 'The registration fee for CONCEPTO-23 is INR 99/- per person. This fee covers access to all event sessions and workshops.',
        },
        {
            question: 'Where is the venue for CONCEPTO-23?',
            answer: 'CONCEPTO-23 will be held at TP 501/502. You can reach the venue by 9 am.',
        },
        {
            question: 'Can I attend specific sessions or do I need to register for the entire event?',
            answer: 'You have the flexibility to choose which sessions to attend. While we recommend registering for the entire event to maximize your experience, you can also register for specific sessions of interest.',
        },
        {
            question: 'What is the schedule for CONCEPTO-23?',
            answer: 'The event spans two days with a variety of sessions, workshops, and activities. You can find the detailed schedule on our "Event Schedule" page, which includes session timings, topics, and speaker information.',
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
