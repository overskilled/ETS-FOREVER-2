import { MARQUEE_WORDS } from '../data/content';

export default function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="bg-ink-1 text-white overflow-hidden py-3.5 md:py-[18px] border-y border-ink-2" aria-hidden="true">
      <div className="inline-flex whitespace-nowrap gap-6 animate-marquee">
        {items.map((w, i) => (
          <span
            key={i}
            className="font-display font-extrabold text-sm md:text-lg tracking-[0.04em] uppercase inline-flex items-center gap-4 md:gap-6"
          >
            {w}
            <span className="text-brand-secondary text-[12px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
