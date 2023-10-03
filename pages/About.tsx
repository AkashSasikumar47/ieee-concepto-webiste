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
                <title>About CONCEPTO-23</title>
                {/* Add any meta tags or other head content here */}
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
