"use client";

import React from 'react';
import Head from 'next/head';
import EventBanner from '../components/EventBanner/EventBanner';

import '../app/globals.css';

const Banner = () => {
    return (
        <div>
            <Head>
                <title>CONCEPTO-23 | IEEE SRMIST Student Branch</title>
                <meta name="description" content="CONCEPTO-23 is an annual event organized by IEEE SB SRM, your gateway to innovation, ideation, and a world of opportunities." />
                <meta name="keywords" content="CONCEPTO-23, IEEE SRMIST, innovation, ideation, opportunities" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.ico" />

                <meta name="author" content="Akash Sasikumar" />
                <meta property="og:title" content="CONCEPTO-23 | IEEE SRMIST Student Branch" />
                <meta property="og:description" content="CONCEPTO-23 is an annual event organized by IEEE SB SRM, your gateway to innovation, ideation, and a world of opportunities." />
                <meta property="og:image" content="/Assets/Miscellaneous/ogImage.png" />
                <meta property="og:url" content="https://www.ieeesrmist.com" />
            </Head>

            <EventBanner />
        </div>
    );
}

export default Banner;
