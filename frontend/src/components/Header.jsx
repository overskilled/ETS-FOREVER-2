import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV } from '../data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-200 backdrop-blur-[14px] backdrop-saturate-150 ${
          scrolled
            ? 'bg-white/[0.92] shadow-soft border-line-2'
            : 'bg-white/80 border-transparent'
        }`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="max-w-container mx-auto px-5 md:px-8 flex items-center justify-between py-3 md:py-3.5 gap-4 md:gap-8">
          <a href="#top" aria-label="ETS Forever 2 — accueil" onClick={close} className="block">
            <img src="/assets/img/logo-horizontal.svg" alt="ETS Forever 2" className="block h-9 md:h-11" />
          </a>

          <nav className="hidden md:flex gap-[26px]" aria-label="Navigation principale">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-ink-2 py-1.5 transition-colors hover:text-brand-primary after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-[13px] py-2.5 px-4 rounded-sm shadow-cta transition hover:bg-brand-primary-deep hover:shadow-cta-hover hover:text-white hover:-translate-y-px active:translate-y-px"
          >
            Demander un devis
          </a>

          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-line-1 rounded-md bg-white cursor-pointer p-0"
          >
            <span className="relative w-[18px] h-3 inline-block" aria-hidden="true">
              <span className={`absolute left-0 right-0 h-0.5 rounded-sm bg-ink-1 transition-transform duration-200 ease-out ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 right-0 h-0.5 rounded-sm bg-ink-1 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 right-0 h-0.5 rounded-sm bg-ink-1 transition-transform duration-200 ease-out ${open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[49] bg-white/95 backdrop-blur-[16px] flex items-center justify-center pt-[90px] pb-8 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-col gap-4 w-full max-w-[360px]"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              aria-label="Navigation mobile"
            >
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="font-display text-3xl font-extrabold tracking-tightest text-ink-1 py-2 leading-tight border-b border-line-2 last:border-b-0 hover:text-brand-primary-deep"
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={close}
                className="mt-3 w-full inline-flex items-center justify-center bg-brand-primary text-white font-bold text-[15px] py-4 rounded-md shadow-cta transition hover:bg-brand-primary-deep hover:text-white"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 + NAV.length * 0.04, duration: 0.3 }}
              >
                Demander un devis
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
