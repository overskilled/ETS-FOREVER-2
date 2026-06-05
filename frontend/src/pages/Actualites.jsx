import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { NEWS, NEWS_CATEGORIES } from '../data/news';
import PageHero from '../components/PageHero';
import NewsCard from '../components/NewsCard';
import CTABanner from '../components/CTABanner';

const DEFAULT_TITLE = 'ETS FOREVER 2 — Commerce général, import-export & BTP · Yaoundé';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };

export default function Actualites() {
  const [cat, setCat] = useState('all');

  useEffect(() => {
    document.title = 'Actualités — ETS FOREVER 2';
    return () => { document.title = DEFAULT_TITLE; };
  }, []);

  const visible = useMemo(
    () => (cat === 'all' ? NEWS : NEWS.filter((n) => n.category === cat)),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Nos dernières annonces, chantiers et partenariats."
        intro="Au quotidien, ETS FOREVER 2 livre, signe, négocie. Cette page vous tient au courant — sans communication superflue."
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Actualités' },
        ]}
      />

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
            {NEWS_CATEGORIES.map((c) => {
              const active = cat === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCat(c.slug)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 text-[13px] font-semibold py-2 px-4 rounded-full border transition-colors ${
                    active
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-surface text-ink-2 border-line-1 hover:border-brand-primary hover:text-brand-primary'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {visible.length === 0 ? (
            <p className="text-ink-3 text-center py-16">Pas d'actualité à afficher pour cette catégorie.</p>
          ) : (
            <motion.div
              key={cat}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            >
              {visible.map((n, i) => <NewsCard key={n.slug} n={n} i={i} />)}
            </motion.div>
          )}
        </div>
      </section>

      <CTABanner
        title="Discutons de votre prochain projet."
        subtitle="Devis sous 24h, sans engagement. Un seul interlocuteur du premier appel à la livraison."
      />
    </>
  );
}
