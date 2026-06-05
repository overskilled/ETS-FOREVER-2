import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Item({ q, a, open, onToggle }) {
  return (
    <li className="border-b border-line-1 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 text-left py-4 md:py-5 group"
      >
        <span className="font-display font-extrabold text-base md:text-[17px] text-ink-1 tracking-tight">{q}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 w-7 h-7 rounded-full grid place-items-center border border-line-1 text-ink-2 transition-transform duration-200 ${open ? 'rotate-45 border-brand-primary text-brand-primary' : ''}`}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[14.5px] leading-[1.6] text-ink-2 pb-5 md:pb-6 pr-10 m-0">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <ul className="list-none p-0 m-0">
      {items.map((it, i) => (
        <Item
          key={i}
          q={it.q}
          a={it.a}
          open={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </ul>
  );
}
