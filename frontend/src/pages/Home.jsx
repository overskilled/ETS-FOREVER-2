import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Why from '../components/Why';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Why />
      <Process />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
