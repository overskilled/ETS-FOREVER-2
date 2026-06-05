import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const STATS = [
  { value: 1200, suffix: '+',     label: 'Chantiers & commandes\nlivrés à ce jour' },
  { value: 24,   suffix: 'h',     label: 'Délai moyen\npour un devis ferme' },
  { value: 12,   suffix: ' ans',  label: "D'expérience\nsur Yaoundé et région" },
  { value: 5,    suffix: '',      label: 'Activités\nsous le même toit' },
];

function Stat({ value, suffix, label, start, i }) {
  const n = useCountUp(value, { start, duration: 1400 });
  const display = value >= 1000 ? n.toLocaleString('fr-FR').replace(/,/g, ' ') : n;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="flex flex-col"
    >
      <div className="font-display font-extrabold text-ink-1 tracking-tightest leading-[0.95] text-[clamp(44px,5.5vw,80px)]">
        {display}<span className="text-brand-secondary">{suffix}</span>
      </div>
      <div className="text-[12px] sm:text-[13px] text-ink-3 leading-snug mt-3 md:mt-4 whitespace-pre-line">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section
      ref={ref}
      className="py-14 md:py-20 bg-white border-y border-line-2"
      aria-label="Chiffres clés"
    >
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-10 md:divide-x md:divide-line-1">
          {STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'md:pl-8 lg:pl-12' : ''}>
              <Stat {...s} start={inView} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
