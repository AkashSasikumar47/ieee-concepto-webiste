import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Workflow from '../components/Workflow/Workflow';
import Registration from '../components/Registration/Registration';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

import '../app/globals.css';

const About = () => {
    return (
        <div>
            <Head>
                <title>About CONCEPTO-23 | IEEE SRMIST Student Branch</title>
                <meta name="description" content="Learn more about CONCEPTO-23, an annual event organized by IEEE SB SRM. Discover our mission to nurture innovation, inspire minds, and provide a platform for learning and growth." />
                <meta name="keywords" content="About CONCEPTO-23, IEEE SRMIST, innovation, learning, growth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Workflow />
            <Registration />
            <FAQ />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default About;
