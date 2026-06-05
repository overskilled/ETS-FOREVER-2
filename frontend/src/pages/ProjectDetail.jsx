import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const DEFAULT_TITLE = 'ETS FOREVER 2 — Commerce général, import-export & BTP · Yaoundé';

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function MetaItem({ label, value }) {
  return (
    <div>
      <dt className="text-[11px] font-bold tracking-wider2 uppercase text-ink-3 m-0">{label}</dt>
      <dd className="font-display font-extrabold text-base md:text-[17px] text-ink-1 m-0 mt-1.5 leading-tight">{value}</dd>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <header>
      <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3">{eyebrow}</span>
      <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2sm leading-[1.05] text-balance">{title}</h2>
    </header>
  );
}

function RelatedCard({ slug }) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <Link
      to={`/realisations/${p.slug}`}
      className="group block bg-white border border-line-1 rounded-2xl overflow-hidden transition-[box-shadow,border-color] hover:shadow-lift hover:border-transparent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-inset">
        <img src={p.img} alt="" loading="lazy" className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-extrabold text-ink-1 m-0 text-base leading-tight">{p.title}</h3>
        <p className="text-[12.5px] text-ink-3 mt-1.5 m-0">{p.location} · {p.year}</p>
      </div>
    </Link>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — ETS FOREVER 2`;
    return () => { document.title = DEFAULT_TITLE; };
  }, [project]);

  if (!project) return <Navigate to="/realisations" replace />;

  return (
    <>
      <PageHero
        eyebrow={project.categoryLabel}
        title={project.title}
        intro={project.summary}
        img={project.img}
        breadcrumb={[
          { label: 'Accueil',      to: '/' },
          { label: 'Réalisations', to: '/realisations' },
          { label: project.title },
        ]}
      />

      <section className="py-10 md:py-12 bg-white border-b border-line-2">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 m-0 p-0">
            <MetaItem label="Lieu"   value={project.location} />
            <MetaItem label="Année"  value={project.year} />
            <MetaItem label="Durée"  value={project.duration} />
            <MetaItem label="Client" value={project.client} />
          </dl>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <SectionHeader eyebrow="Contexte" title="Le besoin et la commande." />
          <div>
            {project.context.map((p, i) => (
              <p key={i} className="text-base md:text-[17px] leading-[1.65] text-ink-2 m-0 mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <SectionHeader eyebrow="Périmètre" title="Ce que nous avons exécuté." />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="list-none p-0 m-0 grid gap-4"
          >
            {project.scope.map((s, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="grid grid-cols-[28px_1fr] gap-3 items-start"
              >
                <span className="w-7 h-7 rounded-full bg-brand-primary-soft text-brand-primary grid place-items-center mt-0.5">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span className="text-base text-ink-2 leading-[1.5]">{s}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {project.results?.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-8">
            <header className="mb-8 md:mb-10 max-w-prose">
              <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3">Résultats</span>
              <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2sm leading-[1.05] text-balance">Ce que ça a donné, chiffres en main.</h2>
            </header>
            <motion.dl
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 p-0 m-0"
            >
              {project.results.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className="border-t border-line-1 pt-5">
                  <dt className="font-display font-extrabold text-ink-1 text-h2sm leading-none tracking-tight m-0">{r.value}</dt>
                  <dd className="text-[14px] text-ink-3 leading-[1.55] m-0 mt-2">{r.label}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </section>
      )}

      <CTABanner
        title="Un projet similaire ? Parlons-en."
        subtitle="Devis sous 24h. Un seul interlocuteur du premier appel à la livraison."
      />

      {project.related?.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-8">
            <header className="mb-8 md:mb-10">
              <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3">Autres réalisations</span>
              <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2sm leading-[1.05] text-balance">À voir aussi.</h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {project.related.map((s) => <RelatedCard key={s} slug={s} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
