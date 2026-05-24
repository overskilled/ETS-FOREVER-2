import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Why from './components/Why';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorFollower from './components/CursorFollower';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
