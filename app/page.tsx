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

import './globals.css';

const Home = () => {
  return (
    <div className="bg-stone-50">
      <Head>
        <title>CONCEPTO-24 | IEEE SRMIST</title>
        <meta name="description" content="CONCEPTO-24 is an annual event organized by IEEE SB SRM, your gateway to innovation, ideation, and a world of opportunities." />
        <meta name="keywords" content="PROTOCOL 1.0, hackathon, IEEE SRMIST, computer science, engineering, innovation, technology" />
        <link rel="icon" href="/favicon.ico?v=2" />
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