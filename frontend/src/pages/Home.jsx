import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import RealisationsHighlight from '../components/RealisationsHighlight';
import Why from '../components/Why';
import Process from '../components/Process';
import NewsHighlight from '../components/NewsHighlight';
import ClosingCTA from '../components/ClosingCTA';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { orgSchema, localBusinessSchema, websiteSchema } from '../lib/jsonld';

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        jsonld={[orgSchema(), localBusinessSchema(), websiteSchema()]}
      />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <RealisationsHighlight />
        <Why />
        <Process />
        <NewsHighlight />
        <ClosingCTA />
        <Contact />
      </main>
    </>
  );
}
