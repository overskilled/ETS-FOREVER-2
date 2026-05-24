import { motion } from 'framer-motion';
import { QUOTES } from '../data/content';

function initials(name) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2);
}

function QuoteCard({ q, i }) {
  return (
    <figure className="m-0 p-6 sm:p-7 md:p-8 bg-white border border-line-1 rounded-2xl flex flex-col gap-3.5 md:gap-[18px] w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0">
      <svg className="block" viewBox="0 0 24 24" width="22" height="22" fill="#E2A23B" aria-hidden="true">
        <path d="M9.5 6C6.5 6 4 8.5 4 11.5V18h6v-6.5H7c0-1.4 1.1-2.5 2.5-2.5zM18.5 6C15.5 6 13 8.5 13 11.5V18h6v-6.5h-3c0-1.4 1.1-2.5 2.5-2.5z"/>
      </svg>
      <blockquote className="m-0 font-display text-base md:text-lg leading-[1.42] font-medium text-ink-1 tracking-tight flex-1">
        {q.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-4 border-t border-line-2">
        <div className={`w-11 h-11 rounded-full grid place-items-center font-extrabold text-sm flex-shrink-0 ${
          i % 2 ? 'bg-brand-secondary text-ink-1' : 'bg-brand-primary text-white'
        }`}>
          {initials(q.name)}
        </div>
        <div>
          <strong className="block text-sm text-ink-1 font-extrabold">{q.name}</strong>
          <span className="block text-xs text-ink-3 mt-0.5">{q.role} · {q.city}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const loop = [...QUOTES, ...QUOTES];
  return (
    <section id="temoignages" className="relative overflow-hidden py-16 sm:py-20 md:py-[120px] bg-cream-1 border-y border-line-2">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <header className="max-w-prose mx-auto mb-10 md:mb-16 text-center">
          <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5">
            On en parle
          </span>
          <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2 text-balance">
            Ce que disent celles et ceux qui reviennent.
          </h2>
        </header>
      </div>

      <div className="relative py-6">
        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((q, i) => <QuoteCard key={i} q={q} i={i} />)}
        </motion.div>
        <div className="absolute top-0 bottom-0 left-0 w-10 md:w-24 pointer-events-none z-[2] bg-gradient-to-r from-cream-1 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-10 md:w-24 pointer-events-none z-[2] bg-gradient-to-l from-cream-1 to-transparent" />
      </div>
    </section>
  );
}
