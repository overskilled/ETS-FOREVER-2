import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';

const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

// Pillars first, then one sub-activity, so the 3×2 grid stays balanced.
const FEATURED_ORDER = [
  'Commerce général',
  'Import-export',
  'BTP — bâtiment & travaux publics',
  'Santé & produits pharmaceutiques',
  'Prestation de services',
  'Fournitures & équipements',
];

function ServiceCard({ s, i }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={i}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-ink-1 aspect-[5/6] sm:aspect-[4/5] md:aspect-[3/4] min-h-[360px]"
    >
      <Link
        to={`/activites/${s.slug}`}
        aria-label={`En savoir plus sur ${s.title}`}
        className="absolute inset-0 z-[2]"
      />
      <img
        src={s.img}
        alt={`${s.title} — ETS FOREVER 2`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/85" />

      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 text-brand-primary-deep py-1.5 px-3 rounded-full text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
        {s.tag}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
        <h3 className="font-display font-extrabold text-xl md:text-[22px] tracking-tight m-0 mb-1.5 leading-tight text-balance">
          {s.title}
        </h3>
        <p className="text-[13px] md:text-[13.5px] leading-[1.5] text-white/80 m-0 line-clamp-2">
          {s.desc}
        </p>
        <span className="inline-flex items-center gap-1 mt-3 text-white font-bold text-[13px] transition-[gap] duration-150 group-hover:gap-2">
          En savoir plus
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const featured = FEATURED_ORDER
    .map((title) => SERVICES.find((s) => s.title === title))
    .filter(Boolean);

  return (
    <section id="services" className="py-16 sm:py-20 md:py-[120px]">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <header className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10">
          <div className="max-w-prose">
            <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5">
              Nos activités
            </span>
            <h2 className="font-display font-extrabold text-ink-1 m-0 mb-4 text-h2 text-balance">
              Cinq pillars,<br />un seul interlocuteur.
            </h2>
            <p className="text-base md:text-[17px] leading-[1.55] text-ink-3 m-0 max-w-[560px]">
              Du chantier à la marchandise importée — un seul partenaire pour
              bâtir, fournir et approvisionner, sans multiplier les interlocuteurs.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start md:self-end text-brand-primary font-bold text-[14px] transition-[gap] duration-150 hover:gap-3"
          >
            Discuter d'un projet
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </header>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {featured.map((s, i) => <ServiceCard s={s} i={i} key={s.title} />)}
        </motion.div>
      </div>
    </section>
  );
}
