import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import '../app/globals.css';

const PrivacyPolicy = () => {
    return (
        <div>
            <Head>
                <title>Privacy Policy - IEEE SRMIST</title>
                <meta name="description" content="Privacy Policy for IEEE SRMIST Student Branch." />
                <meta name="keywords" content="Privacy Policy, data collection, data usage" />
            </Head>

            <Navbar />

            <div className="bg-white">
                <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                    <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
                        Privacy Policy
                    </h1>
                    <div className="prose max-w-prose mx-auto text-gray-700">
                        <p className="mb-6">
                            This Privacy Policy describes how your personal information is collected, used, and
                            shared when you visit or make a purchase from our website.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Information We Collect</h2>
                        <p className="mb-6">
                            We may collect information that you provide directly, such as your name, email address,
                            and contact information. We may also collect information about your use of our website,
                            such as your IP address, browser type, and browsing activity.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">How We Use Your Information</h2>
                        <p className="mb-6">
                            We use the information we collect to provide, maintain, and improve our website's
                            functionality and user experience. This includes sending you updates, promotions, and
                            important announcements.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Sharing Your Information</h2>
                        <p className="mb-6">
                            We do not sell, trade, or rent your personal information to third parties. However, we may
                            share your information with service providers who help us operate and improve our website.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Your Choices</h2>
                        <p className="mb-6">
                            You can opt out of receiving promotional emails from us by following the unsubscribe
                            instructions provided in those emails. You can also contact us to update, correct, or
                            delete your personal information.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Security</h2>
                        <p className="mb-6">
                            We take appropriate security measures to protect your information. However, no data
                            transmission over the internet can be guaranteed to be 100% secure. We cannot guarantee
                            the security of any information you transmit to us.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to this Policy</h2>
                        <p className="mb-6">
                            We may update this Privacy Policy to reflect changes to our information practices. We
                            encourage you to periodically review this page for the latest information on our privacy
                            practices.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                            <a href="mailto:ieee@srmist.edu.in" className="text-blue-500 hover:underline">ieee@srmist.edu.in</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
