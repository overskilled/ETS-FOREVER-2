import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatNewsDate } from '../data/news';

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function NewsCard({ n, i = 0 }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={i}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative bg-white border border-line-1 rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-200 hover:shadow-lift hover:border-transparent will-change-transform"
    >
      <Link
        to={`/actualites/${n.slug}`}
        aria-label={n.title}
        className="absolute inset-0 z-[2]"
      />
      <div className="relative aspect-[16/10] overflow-hidden bg-inset">
        <img
          src={n.img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-3.5 left-3.5 bg-white/95 text-brand-primary-deep py-[5px] px-[11px] rounded-sm text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-[6px]">
          {n.categoryLabel}
        </span>
      </div>
      <div className="p-5 md:p-6 flex flex-col">
        <time
          dateTime={n.date}
          className="text-[11px] font-bold tracking-wider2 uppercase text-ink-3 block mb-2.5"
        >
          {formatNewsDate(n.date)}
        </time>
        <h3 className="font-display font-extrabold text-ink-1 tracking-tight m-0 mb-2 text-lg leading-tight">
          {n.title}
        </h3>
        <p className="text-[13.5px] leading-[1.5] text-ink-3 m-0 line-clamp-3">{n.excerpt}</p>
        <span className="inline-flex items-center gap-1 mt-3.5 text-brand-primary font-bold text-[13px] transition-[gap] duration-150 group-hover:gap-2">
          Lire la suite
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </motion.article>
  );
}
