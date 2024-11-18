import React from 'react';

const Workflow = () => {
    return (
        <section className="py-16 mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Event Flow</h2>
                </div>
                {/* Day 1 */}
                <div className="event-card bg-white border border-blue-700 rounded-lg p-6 shadow-lg mb-8 text-black">
                    <div className="event-header flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-blue-700">Day 1: Explore and Create</h3>
                    </div>
                    <div className="event-details mt-4">
                        <p className="text-normal font-semibold text-black">Session 1 (9:00 AM to 12:00 PM): Understanding Business Models and Finding Inspiration</p>
                        <p className="text-gray-500">Discover how business models work and the challenges they pose.</p>
                        <p className="text-gray-500">Gain motivation from our speakers to fuel your innovative spirit.</p>
                        <p className="text-normal font-semibold text-black">Session 2 (12:00 PM to 1:00 PM): Interactive Q&A and Networking</p>
                        <p className="text-gray-500">Engage with our speakers in a lively Q&A session.</p>
                        <p className="text-gray-500">Connect with like-minded participants and explore common interests.</p>
                        <p className="text-normal font-semibold text-black">Session 3 (2:00 PM to 5:00 PM): Team Building and Innovative Thinking</p>
                        <p className="text-gray-500">Dive into hands-on team-building activities.</p>
                        <p className="text-gray-500">Develop solutions within constraints and learn how to scale your ideas.</p>
                        <p className="text-gray-500">Evening: Prepare for the next day by crafting your presentations and pitches, tailored for potential investors.</p>
                    </div>
                </div>

                {/* Day 2 */}
                <div className="event-card bg-white border border-blue-700 rounded-lg p-6 shadow-lg mb-8 text-black">
                    <div className="event-header flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-blue-700">Day 2: Present and Excel</h3>
                    </div>
                    <div className="event-details mt-4">
                        <p className="text-normal font-semibold text-black">Session 1 (9:00 AM to 12:00 PM): Presentation Tips and Pitching Essentials</p>
                        <p className="text-gray-500">Get expert recommendations on effective presentations and pitching.</p>
                        <p className="text-gray-500">Learn what to focus on and what to avoid.</p>
                        <p className="text-normal font-semibold text-black">Session 2 (12:00 PM to 1:00 PM): Refine Your Pitch and Presentation</p>
                        <p className="text-gray-500">Work on enhancing your presentation and pitch based on the insights received.</p>
                        <p className="text-normal font-semibold text-black">Session 3 (2:00 PM to 4:00 PM): Pitch Your Ideas and Face the Panel</p>
                        <p className="text-gray-500">Present your ideas in a business setting.</p>
                        <p className="text-gray-500">Receive valuable feedback and answer questions from our panel.</p>
                        <p className="text-gray-500">Evening: Celebrate your achievements and network with fellow participants.</p>
                    </div>
                </div>

                {/* Event Highlights */}
                <div className="text-2xl font-semibold text-blue-700 mb-2">Event Highlights:</div>
                <ul className="list-disc pl-6 text-gray-500">
                    <li>Gain insights into business models and innovation.</li>
                    <li>Connect with industry experts and peers.</li>
                    <li>Acquire hands-on experience in team building and problem-solving.</li>
                    <li>Refine your presentation and pitching skills.</li>
                    <li>Compete for cash prizes and recognition for your innovation.</li>
                </ul>
            </div>
        </section>
    );
};

export default Workflow;
