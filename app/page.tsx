import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutConcepto from '../components/AboutConcepto/AboutConcepto';
import AboutIEEE from '../components/About/About';
import Speakers from '../components/Speakers/Speakers';
import FAQ from '../components/FAQ/FAQ';
import Registration from '../components/Registration/Registration';
import Sponsors from '../components/Sponsors/Sponsors';
import Testimonials from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>CONCEPTO23</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* About CONCEPTO23 */}
      <AboutConcepto />

      {/* About IEEE */}
      <AboutIEEE />

      {/* Speakers */}
      <Speakers />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Registration */}
      <Registration />

      {/* Sponsors */}
      <Sponsors />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
