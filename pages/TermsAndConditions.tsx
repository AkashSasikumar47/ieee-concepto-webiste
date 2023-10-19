import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import '../app/globals.css';

const TermsAndConditions = () => {
    return (
        <div>
            <Head>
                <title>Terms & Conditions - IEEE SRMIST</title>
                <meta name="description" content="Terms and Conditions for IEEE SRMIST Student Branch." />
                <meta name="keywords" content="Terms & Conditions, website usage, user agreement" />
            </Head>

            <Navbar />

            <div className="bg-white">
                <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                    <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
                        Terms & Conditions
                    </h1>
                    <div className="prose max-w-prose mx-auto text-gray-700">
                        <p className="mb-6">
                            These Terms and Conditions govern your use of our website. By accessing and using our
                            website, you agree to comply with these terms. If you do not agree with these terms,
                            please do not use our website.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Use of Our Website</h2>
                        <p className="mb-6">
                            You may use our website for lawful purposes and in compliance with these terms. You are
                            responsible for maintaining the confidentiality of your account and password and for
                            restricting access to your computer.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Intellectual Property</h2>
                        <p className="mb-6">
                            The content on our website, including text, graphics, logos, and images, is protected by
                            copyright and other intellectual property laws. You may not use, modify, or distribute our
                            content without our written consent.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Links to Other Websites</h2>
                        <p className="mb-6">
                            Our website may contain links to third-party websites. We are not responsible for the
                            content or privacy practices of these websites. Use them at your own risk.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to these Terms</h2>
                        <p className="mb-6">
                            We may update these terms to reflect changes to our website and services. We encourage you
                            to periodically review these terms for the latest information.
                        </p>

                        <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these Terms & Conditions, please contact us at{' '}
                            <a href="mailto:ieee@srmist.edu.in" className="text-blue-500 hover:underline">ieee@srmist.edu.in</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;
