import React from 'react';

const Workflow = () => {
    return (
        <section className="bg-white py-16 mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Event Flow</h2>
                </div>
                {/* Day 1 */}
                <div className="event-card bg-black border border-blue-700 rounded-lg p-6 shadow-lg mb-8 text-white">
                    <div className="event-header flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-blue-700">Day 1: CONCEPTO - Your Gateway to Innovation</h3>
                        <p className="text-gray-500">9:00 AM to 12:00 PM</p>
                    </div>
                    <div className="event-details mt-4">
                        <p className="text-lg font-semibold text-white">Session 1: Business Model Canvas</p>
                        <p className="text-gray-500">Explore the world of business models with our expert speakers.</p>
                        <p className="text-gray-500">Learn how to transform ideas into visual realities using the Business Model Canvas.</p>
                        <p className="text-gray-500">Lunch Break (1:00 PM to 2:00 PM)</p>
                        <p className="text-lg font-semibold text-white">Session 3: Team Building and Idea Creation</p>
                        <p className="text-gray-500">Engage in interactive games and sessions to form teams and build connections.</p>
                        <p className="text-gray-500">Work on your innovative ideas within given constraints to fuel your creativity.</p>
                        <p className="text-gray-500">Session 2: Open Discussion on Startups</p>
                        <p className="text-gray-500">Participate in a lively discussion to enhance your interaction and understanding.</p>
                        <p className="text-gray-500">Get your questions answered and be ready to dive back into the event.</p>
                    </div>
                </div>

                {/* Day 2 */}
                <div className="event-card bg-black border border-blue-700 rounded-lg p-6 shadow-lg mb-8 text-white">
                    <div className="event-header flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-blue-700">Day 2: CONCEPTO - Embrace the Innovation Revolution</h3>
                        <p className="text-gray-500">9:00 AM to 12:00 PM</p>
                    </div>
                    <div className="event-details mt-4">
                        <p className="text-lg font-semibold text-white">Session 1: Presentation Review and Pitching Skills</p>
                        <p className="text-gray-500">Get valuable insights from our expert speakers on improving your presentations.</p>
                        <p className="text-gray-500">Learn how to pitch your ideas effectively to potential investors.</p>
                        <p className="text-gray-500">Lunch Break (1:00 PM to 2:00 PM)</p>
                        <p className="text-lg font-semibold text-white">Session 3: Judging and Presenting</p>
                        <p className="text-gray-500">Showcase your innovative ideas and skills.</p>
                        <p className="text-gray-500">Receive feedback from our esteemed panel of judges.</p>
                        <p className="text-lg font-semibold text-white">Session 2: Work on Your Pitch and Presentation</p>
                        <p className="text-gray-500">Collaborate with peers and mentors to refine your pitch and presentation skills.</p>
                        <p className="text-gray-500">Be prepared for the final leg of your innovation journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
