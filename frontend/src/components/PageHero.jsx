import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

export default function PageHero({ eyebrow, title, intro, img, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-10 md:pt-14 pb-10 md:pb-16">
      <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full pointer-events-none bg-[radial-gradient(circle,_theme(colors.brand.primary-soft)_0%,_transparent_70%)]" />

      <div className="relative max-w-container mx-auto px-5 md:px-8">
        {breadcrumb && (
          <div className="mb-6 md:mb-8">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {eyebrow && (
              <motion.span
                variants={fadeUp}
                className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5"
              >
                {eyebrow}
              </motion.span>
            )}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold text-ink-1 m-0 mb-4 md:mb-5 text-h2 text-balance leading-[1.06]"
            >
              {title}
            </motion.h1>
            {intro && (
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-[1.55] text-ink-2 max-w-[560px] m-0"
              >
                {intro}
              </motion.p>
            )}
          </motion.div>

          {img && (
            <motion.aside
              className="relative aspect-[4/3] md:aspect-[5/4] rounded-[18px] overflow-hidden bg-brand-primary"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover block brightness-[0.94] saturate-[1.05]"
              />
            </motion.aside>
          )}
        </div>
      </div>
    </section>
  );
}
