import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function ProjectCard({ p, i = 0 }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={i}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative bg-white border border-line-1 rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-200 hover:shadow-lift hover:border-transparent will-change-transform"
    >
      <Link
        to={`/realisations/${p.slug}`}
        aria-label={p.title}
        className="absolute inset-0 z-[2]"
      />
      <div className="relative aspect-[16/10] overflow-hidden bg-inset">
        <img
          src={p.img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-3.5 left-3.5 bg-white/95 text-brand-primary-deep py-[5px] px-[11px] rounded-sm text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-[6px]">
          {p.categoryLabel}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display font-extrabold text-ink-1 tracking-tight m-0 mb-1.5 text-lg leading-tight">{p.title}</h3>
        <p className="text-[13.5px] leading-[1.5] text-ink-3 m-0 line-clamp-2">{p.summary}</p>
        <div className="flex items-center gap-3 text-[12px] text-ink-3 pt-3.5 mt-3.5 border-t border-line-2">
          <span className="font-semibold text-ink-2">{p.location}</span>
          <span aria-hidden="true">·</span>
          <span>{p.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
