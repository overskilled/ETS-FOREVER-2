import { Navigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../data/activities';
import PageHero from '../components/PageHero';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Seo from '../components/Seo';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '../lib/jsonld';
import { SITE_URL } from '../lib/seo';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function SectionHeader({ eyebrow, title }) {
  return (
    <header className="mb-8 md:mb-10">
      <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3">
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2sm leading-[1.05] text-balance">
        {title}
      </h2>
    </header>
  );
}

function SubServiceCard({ title, desc }) {
  return (
    <motion.li
      variants={fadeUp}
      className="bg-white border border-line-1 rounded-2xl p-5 md:p-6 list-none transition-[box-shadow,border-color] duration-200 hover:shadow-lift hover:border-transparent"
    >
      <h3 className="font-display font-extrabold text-base md:text-[17px] text-ink-1 tracking-tight m-0 mb-1.5">{title}</h3>
      <p className="text-[14px] leading-[1.55] text-ink-3 m-0">{desc}</p>
    </motion.li>
  );
}

function CommitmentItem({ title, desc }) {
  return (
    <motion.li
      variants={fadeUp}
      className="grid grid-cols-[36px_1fr] gap-4 items-start list-none"
    >
      <span className="w-9 h-9 rounded-lg bg-brand-primary-soft text-brand-primary grid place-items-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </span>
      <div>
        <b className="font-display font-extrabold text-base text-ink-1 block mb-1 tracking-tight">{title}</b>
        <span className="text-sm text-ink-3 leading-[1.5]">{desc}</span>
      </div>
    </motion.li>
  );
}

function RelatedCard({ slug }) {
  const a = ACTIVITIES[slug];
  if (!a) return null;
  return (
    <Link
      to={`/activites/${a.slug}`}
      className="group block bg-white border border-line-1 rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-200 hover:shadow-lift hover:border-transparent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-inset">
        <img src={a.img} alt={`${a.title} — activité ETS FOREVER 2`} loading="lazy" decoding="async" className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]" />
        <span className="absolute top-3.5 left-3.5 bg-white/95 text-brand-primary-deep py-[5px] px-[11px] rounded-sm text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-[6px]">
          {a.tag}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display font-extrabold text-ink-1 tracking-tight m-0 mb-1.5 text-lg">{a.title}</h3>
        <p className="text-[13.5px] leading-[1.5] text-ink-3 m-0 line-clamp-2">{a.short}</p>
        <span className="inline-flex items-center gap-1 mt-3 text-brand-primary font-bold text-[13px] transition-[gap] duration-150 group-hover:gap-2">
          En savoir plus
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  );
}

export default function ActivityDetail() {
  const { slug } = useParams();
  const activity = ACTIVITIES[slug];

  if (!activity) return <Navigate to="/" replace />;

  return (
    <>
      <Seo
        title={activity.title}
        description={activity.short}
        path={`/activites/${activity.slug}`}
        image={activity.img}
        imageAlt={`${activity.title} — ETS FOREVER 2`}
        jsonld={[
          breadcrumbSchema([
            { name: 'Accueil',       url: `${SITE_URL}/` },
            { name: 'Nos activités', url: `${SITE_URL}/#services` },
            { name: activity.title },
          ]),
          serviceSchema({
            slug: activity.slug,
            name: activity.title,
            description: activity.short,
            image: activity.img,
          }),
          faqPageSchema(activity.faq),
        ]}
      />
      <PageHero
        eyebrow={activity.tag}
        title={activity.title}
        intro={activity.short}
        img={activity.img}
        breadcrumb={[
          { label: 'Accueil',       to: '/' },
          { label: 'Nos activités', to: '/' },
          { label: activity.title },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <SectionHeader eyebrow="Aperçu" title="Ce que nous faisons concrètement." />
          <div className="prose-block">
            {activity.overview.map((p, i) => (
              <p key={i} className="text-base md:text-[17px] leading-[1.65] text-ink-2 m-0 mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <SectionHeader eyebrow="Sous-prestations" title="Notre catalogue en six volets." />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 p-0 m-0"
          >
            {activity.subServices.map((s, i) => <SubServiceCard key={i} {...s} />)}
          </motion.ul>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <SectionHeader eyebrow="Nos engagements" title="Ce sur quoi vous pouvez compter." />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:gap-[22px] p-0 m-0"
          >
            {activity.commitments.map((c, i) => <CommitmentItem key={i} {...c} />)}
          </motion.ul>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <SectionHeader eyebrow="FAQ" title="Vos questions, nos réponses." />
          <div className="bg-white border border-line-1 rounded-2xl px-5 md:px-7">
            <FAQ items={activity.faq} />
          </div>
        </div>
      </section>

      <CTABanner
        title={`Parlons de votre besoin en ${activity.title.toLowerCase()}.`}
        subtitle="Devis sous 24h, sans engagement. Un seul interlocuteur du devis à la livraison."
      />

      {activity.related?.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-8">
            <SectionHeader eyebrow="Pour aller plus loin" title="Nos autres activités." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {activity.related.map((s) => <RelatedCard key={s} slug={s} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
