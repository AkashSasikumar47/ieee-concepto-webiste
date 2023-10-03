"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import MentorsInfo from '../components/MentorsInfo/MentorsInfo';
import Registration from '../components/Registration/Registration';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

import '../app/globals.css';

const Mentors = () => {
    return (
        <div>
            <Head>
                <title>Mentors - CONCEPTO-23</title>
                <meta name="description" content="Meet our expert mentors at CONCEPTO-23 and gain valuable insights into innovation and technology." />
                {/* Add other meta tags, links to CSS or fonts if needed */}
            </Head>
            <Navbar />


            <MentorsInfo />
            <Registration />
            <FAQ />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Mentors;
