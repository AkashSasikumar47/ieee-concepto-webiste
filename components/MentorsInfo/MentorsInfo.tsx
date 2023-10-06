import React from 'react';
import './MentorsInfo.css';

const MentorsInfo = () => {

    const executiveBoardMembers = [
        {
            name: 'Rohan Kumar',
            designation: 'Chairperson',
            photoUrl: '/Assets/Mentors/Executive Board/Chairperson.png',
        },
        {
            name: 'Vaishali V',
            designation: 'Vice-Chairperson',
            photoUrl: '/Assets/Mentors/Executive Board/Vice-Chairperson.png',
        },
        {
            name: 'Nishanth Rao',
            designation: 'Director',
            photoUrl: '/Assets/Mentors/Executive Board/Director.png',
        },
        {
            name: 'Amrithavarshini B',
            designation: 'WIE - Head',
            photoUrl: '/Assets/Mentors/Executive Board/WIE.png',
        },
        {
            name: 'Sriram Mandalika',
            designation: 'RnD - Head',
            photoUrl: '/Assets/Mentors/Executive Board/RnD.png',
        },
        {
            name: 'Prasoon Agnihotri',
            designation: 'PELS & CES - Head',
            photoUrl: '/Assets/Mentors/Executive Board/PELS&CES.png',
        },
        {
            name: 'Bhoovi Chauhan',
            designation: 'IAS - Head',
            photoUrl: '/Assets/Mentors/Executive Board/IAS.png',
        },
        {
            name: 'Kanishk K U',
            designation: 'MnC - Head',
            photoUrl: '/Assets/Mentors/Executive Board/MnC.png',
        },
        {
            name: 'Harinarayanan R',
            designation: 'Sponsorship - Head',
            photoUrl: '/Assets/Mentors/Executive Board/S&M(2).png',
        },
        {
            name: 'Shiva Kumar',
            designation: 'S&M - Head',
            photoUrl: '/Assets/Mentors/Executive Board/S&M(1).png',
        },
        {
            name: 'Yashovardhan',
            designation: 'CLP - Head',
            photoUrl: '/Assets/Mentors/Executive Board/CLP.png',
        },
        {
            name: 'Akash S',
            designation: 'WAD - Head',
            photoUrl: '/Assets/Mentors/Executive Board/WAD.png',
        },
    ];

    const administrativeBoardMembers = [
        {
            name: 'Sampurna Sahoo',
            designation: 'Secretary',
            photoUrl: '/Assets/Mentors/Admin Board/Secretary.png',
        },
        {
            name: 'Dipanwita Saha',
            designation: 'Joint-Sectretary',
            photoUrl: '/Assets/Mentors/Admin Board/Joint-Secretary.png',
        },
        {
            name: 'Simran Malhotra',
            designation: 'Secretary - WIE',
            photoUrl: '/Assets/Mentors/Admin Board/WIE.png',
        },
        {
            name: 'Arwah Kamdar',
            designation: 'Secretary - RnD',
            photoUrl: '/Assets/Mentors/Admin Board/RnD.png',
        },
        {
            name: 'Aswin Sujith Varghese',
            designation: 'Secretary - S&M',
            photoUrl: '/Assets/Mentors/Admin Board/S&M.png',
        },
        {
            name: 'K Hari Prakash ',
            designation: 'Secretary - MnC',
            photoUrl: '/Assets/Mentors/Admin Board/MnC(1).png',
        },
        {
            name: 'Smilika Reddy',
            designation: 'Secretary - MnC',
            photoUrl: '/Assets/Mentors/Admin Board/MnC(2).png',
        },
        {
            name: 'Jyothi Prakash B',
            designation: 'Secretary - CLP',
            photoUrl: '/Assets/Mentors/Admin Board/CLP.png',
        },

    ];

    return (
        <div>
            <section className="mentors-section bg-white py-16 mb-16">
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-16">Meet Our Executive Board Mentors</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {executiveBoardMembers.map((mentor, index) => (
                            <div key={index} className="mentor-card">
                                <img
                                    src={mentor.photoUrl}
                                    alt={mentor.name}
                                    className="mentor-image"
                                    style={{ maxWidth: '400px', maxHeight: '512px' }}
                                />
                                <div className="mentor-details">
                                    <div className="mentor-name">{mentor.name}</div>
                                    <div className="mentor-designation">{mentor.designation}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mentors-section bg-white py-16 mb-16">
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-16">Meet Our Administrative Board Members</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {administrativeBoardMembers.map((admin, index) => (
                            <div key={index} className="mentor-card">
                                <img
                                    src={admin.photoUrl}
                                    alt={admin.name}
                                    className="mentor-image"
                                    style={{ maxWidth: '400px', maxHeight: '512px' }}
                                />
                                <div className="mentor-details">
                                    <div className="mentor-name">{admin.name}</div>
                                    <div className="mentor-designation">{admin.designation}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentorsInfo;
