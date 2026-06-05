import { motion } from 'framer-motion';
import { PHOTOS } from '../data/content';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };

export default function Hero() {
  return (
    <section id="top" className="bg-white pt-4 sm:pt-6 md:pt-8 pb-10 md:pb-14">
      <div className="max-w-container mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative rounded-[24px] sm:rounded-[28px] md:rounded-[36px] overflow-hidden bg-ink-1 min-h-[560px] sm:min-h-[620px] md:min-h-[700px] lg:min-h-[760px]"
        >
          <img
            src={PHOTOS.hero}
            alt="ETS FOREVER 2 — entrepôt de commerce général et distribution à Yaoundé"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Layered gradients for legibility over a busy photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />

          {/* Top-left: live-pulse tagline badge */}
          <motion.div
            variants={fadeUp}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10"
          >
            <span className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider2 uppercase py-2 px-3.5 rounded-full border border-white/20">
              <span className="relative inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                <span className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-brand-secondary animate-ping2" />
              </span>
              Établissement Forever2 · depuis 2014
            </span>
          </motion.div>

          {/* Bottom content row */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-12 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_auto] items-end gap-8 md:gap-10">
              <motion.div variants={fadeUp}>
                <h1 className="font-display font-extrabold text-white text-balance leading-[1.02] tracking-tightest text-[clamp(40px,7.2vw,92px)] m-0 mb-4 md:mb-5">
                  Bâtir pour durer.
                </h1>
                <p className="text-white/85 text-[15px] sm:text-base md:text-lg leading-[1.55] m-0 mb-6 md:mb-8 max-w-[560px]">
                  Bâtiment & travaux publics, import-export, commerce général,
                  santé et services. Un seul interlocuteur, des délais respectés,
                  la même équipe d'année en année.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-white text-ink-1 font-bold text-[14px] sm:text-[15px] py-2 pl-5 pr-2 rounded-full transition-colors hover:bg-brand-secondary"
                >
                  Demander un devis
                  <span className="w-9 h-9 grid place-items-center bg-brand-primary text-white rounded-full transition-transform group-hover:translate-x-0.5">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </motion.div>

              {/* Floating "Devis sous 24h" badge — Steevlp-style sticker */}
              <motion.a
                variants={fadeUp}
                href="#contact"
                aria-label="Devis sous 24h — descendre vers le formulaire de contact"
                className="hidden md:inline-grid place-items-center w-32 h-32 lg:w-36 lg:h-36 self-end text-white text-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors group"
              >
                <div className="leading-tight">
                  <div className="text-[10px] lg:text-[11px] font-extrabold tracking-wider2 uppercase opacity-90">Devis sous</div>
                  <div className="font-display font-extrabold text-[28px] lg:text-[34px] tracking-tightest -mt-0.5">24h</div>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mt-1 transition-transform group-hover:translate-y-0.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Bottom-right subtle activity counter (Steevlp "/01/05" indicator vibe) */}
          <div className="absolute bottom-5 right-5 md:hidden text-[11px] font-bold tracking-wider2 uppercase text-white/70">
            5 activités
          </div>
        </motion.div>
      </div>
    </section>
  );
}
