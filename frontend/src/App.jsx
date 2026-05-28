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
      <div className="bg-brand-primary text-white text-center text-[12px] md:text-[13px] py-2 px-4 leading-tight">
        <strong className="font-extrabold">Établissement Forever2</strong> — également connu sous le nom <strong className="font-extrabold">ETS Forever2</strong>
      </div>
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
