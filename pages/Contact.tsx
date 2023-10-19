import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

import '../app/globals.css';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us - IEEE SRMIST</title>
                <meta name="description" content="Contact IEEE SRMIST Student Branch. Find our contact information and follow us on social media. Reach out to us via email or phone." />
                <meta name="keywords" content="Contact IEEE SRMIST, email, phone, social media" />
            </Head>

            <Navbar />

            <div className="bg-white text-black mt-16">
                <div className="container mx-auto px-4 max-w-screen-xl py-8">
                    <h1 className="text-3xl md:text-4xl font-semibold text-black mb-6">Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold">Contact Information</h2>
                            <p className="mt-4">
                                <strong>Email:</strong> <a href="mailto:ieee@srmist.edu.in" className="text-blue-700 hover:underline">ieee@srmist.edu.in</a>
                            </p>
                            <p className="mt-2">
                                <strong>Phone:</strong> <a href="tel:+917674976687" className="text-blue-700 hover:underline">+91 76749 76687</a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">Follow Us</h2>
                            <div className="flex mt-4 space-x-4">
                                <a href="https://instagram.com/ieeesrmist?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/ieeesrmist?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
