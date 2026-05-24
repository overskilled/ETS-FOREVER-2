import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PHOTOS, WHY_POINTS } from '../data/content';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { x: -16, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Why() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="pourquoi" ref={ref} className="py-16 sm:py-20 md:py-[120px] bg-white">
      <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative aspect-[4/3] md:aspect-[5/6] rounded-[18px] overflow-hidden will-change-transform"
        >
          <motion.img
            src={PHOTOS.why}
            alt="Équipe au travail"
            className="w-full h-[112%] object-cover block will-change-transform"
            style={{ y: imgY }}
          />
          <div className="absolute bottom-3.5 left-3.5 md:bottom-5 md:left-5 bg-white py-2.5 px-3.5 md:py-3.5 md:px-5 rounded-lg shadow-lift flex flex-col items-start">
            <span className="text-[11px] font-bold text-ink-3 tracking-[0.12em] uppercase">Depuis</span>
            <strong className="font-display font-extrabold text-[26px] md:text-[32px] text-brand-primary tracking-tight leading-none">2014</strong>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={item}
            className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary"
          >
            Pourquoi nous choisir
          </motion.span>
          <motion.h2
            variants={item}
            className="font-display font-extrabold text-ink-1 m-0 mt-3.5 mb-4 text-h2sm leading-[1.05] text-balance"
          >
            Une maison,<br/>pas un guichet.
          </motion.h2>
          <motion.p variants={item} className="text-base leading-[1.6] text-ink-2 max-w-[520px]">
            Depuis 2014, ETS FOREVER 2 est un point de repère à Mvog-Mbi. On nous appelle pour un dossier urgent,
            et on revient pour le suivant — parce qu'on retrouve la même équipe, la même rigueur, le même accueil.
          </motion.p>

          <motion.ul variants={stagger} className="list-none p-0 mt-6 md:mt-8 grid gap-[18px]">
            {WHY_POINTS.map((p) => (
              <motion.li
                key={p.title}
                variants={item}
                className="grid grid-cols-[36px_1fr] gap-4 items-start"
              >
                <span className="w-9 h-9 rounded-lg bg-brand-primary-soft text-brand-primary grid place-items-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <div>
                  <b className="font-display font-extrabold text-base text-ink-1 block mb-1 tracking-tight">{p.title}</b>
                  <span className="text-sm text-ink-3 leading-[1.5]">{p.desc}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
