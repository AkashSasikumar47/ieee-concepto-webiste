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
                <title>Mentors - CONCEPTO-23 | IEEE SRMIST Student Branch</title>
                <meta name="description" content="Meet our expert mentors at CONCEPTO-23 organized by IEEE SB SRMIST. Gain valuable insights into innovation and technology." />
                <meta name="keywords" content="Mentors at CONCEPTO-23, IEEE SRMIST, innovation, technology" />
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
