import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import RealisationsHighlight from '../components/RealisationsHighlight';
import Why from '../components/Why';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <RealisationsHighlight />
      <Why />
      <Process />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
