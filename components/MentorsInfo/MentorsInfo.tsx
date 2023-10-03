import React from 'react';

const MentorsInfo = () => {
    // Define an array of mentor objects with their information
    const mentors = [
        {
            name: 'Mentor 1',
            designation: 'President',
            photoUrl: 'public/Assets/Speakers/Speaker_1.png', // Replace with actual photo URL
        },
        {
            name: 'Mentor 2',
            designation: 'Vice President',
            photoUrl: '/path/to/photo2.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 3',
            designation: 'Treasurer',
            photoUrl: '/path/to/photo3.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 4',
            designation: 'Secretary',
            photoUrl: '/path/to/photo4.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 5',
            designation: 'Advisor',
            photoUrl: '/path/to/photo5.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 6',
            designation: 'Board Member',
            photoUrl: '/path/to/photo6.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 7',
            designation: 'Board Member',
            photoUrl: '/path/to/photo7.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 8',
            designation: 'Board Member',
            photoUrl: '/path/to/photo8.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 9',
            designation: 'Board Member',
            photoUrl: '/path/to/photo9.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 10',
            designation: 'Board Member',
            photoUrl: '/path/to/photo10.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 11',
            designation: 'Board Member',
            photoUrl: '/path/to/photo11.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 12',
            designation: 'Board Member',
            photoUrl: '/path/to/photo12.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 13',
            designation: 'Board Member',
            photoUrl: '/path/to/photo13.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 14',
            designation: 'Board Member',
            photoUrl: '/path/to/photo14.jpg', // Replace with actual photo URL
        },
        {
            name: 'Mentor 15',
            designation: 'Board Member',
            photoUrl: '/path/to/photo15.jpg', // Replace with actual photo URL
        },
    ];

    return (
        <section className="bg-white py-16 mb-16">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Meet Our Executive Board Mentors</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img
                                src={mentor.photoUrl}
                                alt={mentor.name}
                                className="w-full h-auto rounded-full"
                            />
                            <div className="text-lg font-semibold mt-4">{mentor.name}</div>
                            <div className="text-sm text-gray-500">{mentor.designation}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorsInfo;
