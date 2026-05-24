import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { STEPS } from '../data/content';

function Step({ s, i, progress }) {
  const start = i / STEPS.length;
  const end = (i + 1) / STEPS.length;
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0.35, 1, 1, 0.35]);
  const x = useTransform(progress, [start, end], [16, 0]);

  return (
    <motion.li
      style={{ opacity, x }}
      className="relative p-5 md:p-7 bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-[6px] will-change-[transform,opacity] before:content-[''] before:absolute before:-left-[26px] md:before:-left-[34px] before:top-[26px] md:before:top-8 before:w-3 md:before:w-4 before:h-3 md:before:h-4 before:rounded-full before:bg-brand-secondary before:shadow-[0_0_0_4px_#154E37,0_0_0_6px_rgba(226,162,59,0.25)]"
    >
      <span className="block font-mono text-xs text-brand-secondary font-bold tracking-[0.14em] mb-3.5">{s.n}</span>
      <h4 className="font-display font-extrabold text-lg md:text-[22px] text-white tracking-tight m-0 mb-2">{s.title}</h4>
      <p className="text-sm leading-[1.6] text-white/80 m-0">{s.desc}</p>
    </motion.li>
  );
}

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 md:py-[120px] bg-brand-primary-deep text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(226,162,59,0.10)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="relative z-[1] max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 lg:gap-20 items-start">
        <div className="md:sticky md:top-[120px]">
          <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-secondary">
            Notre méthode
          </span>
          <h2 className="font-display font-extrabold text-white m-0 mt-3 mb-4 text-h2sm leading-[1.05] text-balance">
            Quatre étapes.<br/>Pas une de plus.
          </h2>
          <p className="text-base leading-[1.55] text-white/70 max-w-[360px]">
            Une méthode posée, transparente — pour que vous gardiez la main du début à la fin.
          </p>
        </div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute top-1.5 bottom-1.5 left-[14px] md:left-[18px] w-0.5 bg-white/10 rounded-sm">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full rounded-sm bg-gradient-to-b from-brand-secondary to-brand-secondary-deep"
            />
          </div>
          <ol className="list-none p-0 m-0 grid gap-8 md:gap-14">
            {STEPS.map((s, i) => <Step key={s.n} s={s} i={i} progress={scrollYProgress} />)}
          </ol>
        </div>
      </div>
    </section>
  );
}
