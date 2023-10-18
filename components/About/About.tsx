import React from 'react';

const About = () => {
    const sectionStyle = `
    .bg-white {
      background-color: white;
    }
  `;

    return (
        <section className="bg-white text-black mb-16" style={{ background: 'white' }}>
            <style>{sectionStyle}</style>
            <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                <div className="text-center mb-16">
                    <img
                        src="/Assets/Sponsors/reaidy-logo1.png"
                        alt="Event Sponsor Logo"
                        className="w-50 h-20 mx-auto mb-8"
                    />
                    <img
                        src="/Assets/Sponsors/xyzDomain.png"
                        alt="Event Sponsor Logo"
                        className="w-50 h-20 mx-auto mb-4"
                    />
                    <img
                        src="/Assets/Sponsors/InterviewCake.png"
                        alt="Event Sponsor Logo"
                        className="w-50 h-20 mx-auto mb-4"
                    />
                    <p className="text-sm font-medium text-gray-700">Event Sponsors</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold text-black text-center mb-8">
                    Discover IEEE SRMIST Student Branch
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <img
                                src="/Assets/Miscellaneous/globe.svg"
                                alt="Globe Icon"
                                className="w-10 h-10 mr-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
                                Our Founding
                            </h3>
                        </div>
                        <p className="text-base md:text-lg font-normal text-gray-700 leading-6 md:leading-7">
                            IEEE SRMIST SB was established in 2015 with a vision to
                            inspire, educate, and empower the next generation of
                            engineers and innovators.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <img
                                src="/Assets/Miscellaneous/loyalty.svg"
                                alt="Loyalty Icon"
                                className="w-10 h-10 mr-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
                                Our Values
                            </h3>
                        </div>
                        <p className="text-base md:text-lg font-normal text-gray-700 leading-6 md:leading-7">
                            We are driven by innovation, education, community, and
                            excellence. These values guide our actions and initiatives.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <img
                                src="/Assets/Miscellaneous/history.svg"
                                alt="History Icon"
                                className="w-10 h-10 mr-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
                                Our Journey
                            </h3>
                        </div>
                        <p className="text-base md:text-lg font-normal text-gray-700 leading-6 md:leading-7">
                            Over the years, we've organized impactful events,
                            workshops, and initiatives, fostering talent and
                            technological advancement.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center mb-4">
                            <img
                                src="/Assets/Miscellaneous/target.svg"
                                alt="Target Icon"
                                className="w-10 h-10 mr-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
                                Membership Benefits
                            </h3>
                        </div>
                        <p className="text-base md:text-lg font-normal text-gray-700 leading-6 md:leading-7">
                            Joining IEEE opens doors to a world of resources,
                            networking, and professional development opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
