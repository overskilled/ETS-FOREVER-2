import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';

const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

// Bento grid spans — 12-col desktop, 6-col tablet, 1-col mobile
const spanClass = {
  feature: 'col-span-1 sm:col-span-6 lg:col-span-5 row-span-1 lg:row-span-2 flex-col sm:flex-row lg:flex-col',
  wide:    'col-span-1 sm:col-span-6 lg:col-span-7 row-span-1 flex-col sm:flex-row',
  third:   'col-span-1 sm:col-span-3 lg:col-span-4 row-span-1 flex-col',
  banner:  'col-span-1 sm:col-span-6 lg:col-span-12 row-span-1 flex-col sm:flex-row',
};

// Media flex ratios depending on layout
const mediaClass = {
  feature: 'flex-1 sm:flex-[0_0_50%] lg:flex-[1.6_1_60%] min-h-[180px] sm:min-h-full lg:min-h-[60%]',
  wide:    'flex-1 sm:flex-[0_0_44%] min-h-[180px] sm:min-h-full',
  third:   'flex-1 min-h-[180px] sm:min-h-0',
  banner:  'flex-1 sm:flex-[0_0_38%] min-h-[180px] sm:min-h-full',
};

// Body padding & sizing
const bodyClass = {
  feature: 'p-5 sm:px-6 sm:py-[22px] lg:px-6 lg:py-6 sm:justify-center lg:justify-start gap-2',
  wide:    'p-5 sm:px-6 sm:py-[22px] sm:justify-center gap-1.5',
  third:   'p-5 sm:p-[18px_22px_20px] gap-1.5',
  banner:  'p-5 sm:px-7 sm:py-6 sm:justify-center gap-1.5',
};

const titleClass = {
  feature: 'text-lg sm:text-xl lg:text-2xl',
  wide:    'text-lg sm:text-xl',
  third:   'text-lg',
  banner:  'text-lg sm:text-xl',
};

const descClampClass = {
  feature: 'line-clamp-3',
  wide:    'line-clamp-2',
  third:   'line-clamp-2',
  banner:  'line-clamp-2',
};

function ServiceCard({ s, i }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={i}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`group bg-white border border-line-1 rounded-2xl overflow-hidden flex min-w-0 relative transition-[box-shadow,border-color] duration-200 ease-out hover:shadow-lift hover:border-transparent will-change-transform ${spanClass[s.span]}`}
    >
      <Link
        to={`/activites/${s.slug}`}
        aria-label={`En savoir plus sur ${s.title}`}
        className="absolute inset-0 z-[2]"
      />
      <div className={`relative overflow-hidden bg-inset min-w-0 ${mediaClass[s.span]}`}>
        <img
          src={s.img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-3.5 left-3.5 bg-white/95 text-brand-primary-deep py-[5px] px-[11px] rounded-sm text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-[6px]">
          {s.tag}
        </span>
      </div>
      <div className={`flex flex-col flex-1 min-w-0 ${bodyClass[s.span]}`}>
        <h3 className={`font-display font-extrabold text-ink-1 tracking-tight m-0 ${titleClass[s.span]}`}>
          {s.title}
        </h3>
        <p className={`text-[13.5px] leading-[1.5] text-ink-3 m-0 overflow-hidden ${descClampClass[s.span]}`}>
          {s.desc}
        </p>
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-line-2 text-[13px]">
          <span className="text-ink-1 font-bold">{s.price}</span>
          <span className="text-brand-primary font-bold inline-flex items-center gap-1 transition-[gap] duration-150 ease-out group-hover:gap-2">
            En savoir plus
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-[120px]">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <header className="max-w-prose mb-10 md:mb-14">
          <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5">
            Nos prestations
          </span>
          <h2 className="font-display font-extrabold text-ink-1 m-0 mb-4 text-h2 text-balance">
            Tout ce dont vous avez besoin,<br/>au même endroit.
          </h2>
          <p className="text-base md:text-[17px] leading-[1.55] text-ink-3 m-0 max-w-[560px]">
            Du chantier à la marchandise importée — un seul partenaire pour
            bâtir, fournir et approvisionner, sans multiplier les interlocuteurs.
          </p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(280px,auto)] sm:auto-rows-[240px]"
        >
          {SERVICES.map((s, i) => <ServiceCard s={s} i={i} key={s.title} />)}
        </motion.div>
      </div>
    </section>
  );
}
