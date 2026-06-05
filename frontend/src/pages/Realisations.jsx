import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import CTABanner from '../components/CTABanner';

const DEFAULT_TITLE = 'ETS FOREVER 2 — Commerce général, import-export & BTP · Yaoundé';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };

export default function Realisations() {
  const [cat, setCat] = useState('all');

  useEffect(() => {
    document.title = 'Réalisations — ETS FOREVER 2';
    return () => { document.title = DEFAULT_TITLE; };
  }, []);

  const visible = useMemo(
    () => (cat === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des chantiers livrés, des conteneurs débarqués, des comptes servis."
        intro="Une sélection de missions menées par ETS FOREVER 2 — pour vous donner une idée concrète, projet par projet, de ce que nous savons faire."
        breadcrumb={[
          { label: 'Accueil', to: '/' },
          { label: 'Réalisations' },
        ]}
      />

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
            {PROJECT_CATEGORIES.map((c) => {
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
            <p className="text-ink-3 text-center py-16">Pas de réalisation à afficher pour cette catégorie.</p>
          ) : (
            <motion.div
              key={cat}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            >
              {visible.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
            </motion.div>
          )}
        </div>
      </section>

      <CTABanner
        title="Et la vôtre, à quoi ressemblera-t-elle ?"
        subtitle="Parlons de votre projet. Devis sous 24h, un seul interlocuteur du devis à la livraison."
      />
    </>
  );
}
