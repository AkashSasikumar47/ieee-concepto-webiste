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
        <title>CONCEPTO23</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
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
