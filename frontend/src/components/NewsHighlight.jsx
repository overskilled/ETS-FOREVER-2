import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NEWS } from '../data/news';
import NewsCard from './NewsCard';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

export default function NewsHighlight() {
  const latest = NEWS.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section id="actualites" className="py-16 sm:py-20 md:py-[120px] bg-surface">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <header className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10">
          <div className="max-w-prose">
            <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5">
              Actualités
            </span>
            <h2 className="font-display font-extrabold text-ink-1 m-0 mb-4 text-h2 text-balance">
              Du neuf chez nous.
            </h2>
            <p className="text-base md:text-[17px] leading-[1.55] text-ink-3 m-0 max-w-[560px]">
              Annonces, chantiers démarrés, partenariats noués — l'activité d'ETS FOREVER 2, mois après mois.
            </p>
          </div>
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 self-start md:self-end text-brand-primary font-bold text-[14px] transition-[gap] duration-150 hover:gap-3"
          >
            Voir toutes les actualités
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </header>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {latest.map((n, i) => <NewsCard key={n.slug} n={n} i={i} />)}
        </motion.div>
      </div>
    </section>
  );
}
