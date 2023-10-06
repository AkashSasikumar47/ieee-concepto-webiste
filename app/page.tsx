"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Sponsors from '../components/Sponsors/Sponsors';
import About from '../components/About/About';
import ConceptoVideo from '../components/ConceptoVideo/ConceptoVideo';
import AboutConcepto from '../components/AboutConcepto/AboutConcepto';
import Speakers from '../components/Speakers/Speakers';
import Registration from '../components/Registration/Registration';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

import '../app/globals.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>CONCEPTO-23 | IEEE SRMIST Student Branch</title>
        <meta name="description" content="CONCEPTO-23 is an annual event organized by IEEE SB SRM, your gateway to innovation, ideation, and a world of opportunities." />
        <meta name="keywords" content="CONCEPTO-23, IEEE SRMIST, innovation, ideation, opportunities" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="Akash Sasikumar" />
        <meta property="og:title" content="CONCEPTO-23 | IEEE SRMIST Student Branch" />
        <meta property="og:description" content="CONCEPTO-23 is an annual event organized by IEEE SB SRM, your gateway to innovation, ideation, and a world of opportunities." />
        <meta property="og:image" content="/Assets/Miscellaneous/ogImage.png" />
        <meta property="og:url" content="https://www.ieeesrmist.com" />
      </Head>

      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <ConceptoVideo />
      <AboutConcepto />
      <Speakers />
      <Registration />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
