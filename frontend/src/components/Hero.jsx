import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { PHOTOS, STATS } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';

const titleWords = [
  { text: 'Bâtir' },
  { text: 'pour' },
  { text: 'durer.', accent: true },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};
const wordReveal = {
  hidden: { y: '110%', opacity: 0 },
  show:   { y: '0%',   opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
};

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, { start, duration: 1400 });
  const display = value >= 1000 ? n.toLocaleString('fr-FR').replace(/,/g, ' ') : n;
  return (
    <motion.div variants={fadeUp} className="flex flex-col">
      <dt className="font-display text-2xl sm:text-[26px] md:text-[32px] font-extrabold text-ink-1 tracking-tight leading-none mb-1.5">
        {display}{suffix}
      </dt>
      <dd className="text-xs leading-snug text-ink-3 m-0">
        {label.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
      </dd>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const photoRef = useRef(null);
  const statsInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-10 sm:pt-14 md:pt-24 pb-8 sm:pb-10 md:pb-20">
      <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full pointer-events-none bg-[radial-gradient(circle,_theme(colors.brand.primary-soft)_0%,_transparent_70%)]" />

      <div className="relative max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-20 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-4"
          >
            Établissement Forever2 · depuis 2014
          </motion.span>

          <h1 className="font-display font-extrabold uppercase text-ink-1 m-0 mb-4 md:mb-6 text-hero text-balance leading-[1.08]" aria-label="Bâtir pour durer.">
            {titleWords.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
                  <motion.span
                    variants={wordReveal}
                    className={`inline-block will-change-transform ${w.accent ? 'text-brand-secondary' : ''}`}
                  >
                    {w.text}
                  </motion.span>
                </span>
                {i === 0 ? <br/> : i < titleWords.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-[1.55] text-ink-2 max-w-[520px] m-0 mb-6 md:mb-8"
          >
            ETS FOREVER 2 accompagne particuliers, entreprises et collectivités
            au Cameroun : bâtiment et travaux publics, import-export, commerce
            général, produits pharmaceutiques et prestations de services. Un seul
            interlocuteur, des délais respectés, la même équipe d'année en année.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8 md:mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-primary text-white font-bold text-[15px] py-3.5 px-5 rounded-md shadow-cta transition hover:bg-brand-primary-deep hover:shadow-cta-hover hover:text-white hover:-translate-y-px active:translate-y-px"
            >
              Demander un devis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-ink-1 font-bold text-[15px] py-3.5 px-5 rounded-md border-[1.5px] border-line-1 transition hover:border-brand-primary hover:text-brand-primary-deep hover:bg-surface"
            >
              Voir nos services
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="flex flex-wrap gap-2 list-none p-0 m-0">
            {['Commerce général', 'Import-export', 'BTP', 'Santé & pharmacie', 'Prestation de services'].map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink-2 bg-surface border border-line-1 rounded-full py-1.5 px-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                {t}
              </li>
            ))}
          </motion.ul>

          {/* <motion.dl
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={statsInView ? 'show' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-8 pt-6 md:pt-7 border-t border-line-1 m-0"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className={i === 2 ? 'col-span-2 sm:col-span-1' : ''}>
                <Stat {...s} start={statsInView} />
              </div>
            ))}
          </motion.dl> */}
        </motion.div>

        <motion.aside
          ref={photoRef}
          className="relative aspect-[4/3] md:aspect-[4/5] max-h-[480px] md:max-h-none rounded-[18px] overflow-hidden bg-brand-primary will-change-transform"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
        >
          <motion.img
            className="w-full h-[112%] md:h-[115%] object-cover block brightness-[0.92] saturate-[1.05] will-change-transform"
            src={PHOTOS.hero}
            alt="Personne au travail à Yaoundé"
            style={{ y: photoY }}
          />
          {/* <div className="hero__overlay">
            <span className="hero__overlay-tag">Mvog-Mbi · Yaoundé</span>
            <p>« Un commerce, un service, une parole. »</p>
          </div> */}
        </motion.aside>
      </div>
    </section>
  );
}
