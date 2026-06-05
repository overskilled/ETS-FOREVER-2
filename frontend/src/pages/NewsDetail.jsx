import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { NEWS, formatNewsDate } from '../data/news';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const DEFAULT_TITLE = 'ETS FOREVER 2 — Commerce général, import-export & BTP · Yaoundé';

function RelatedCard({ slug }) {
  const n = NEWS.find((x) => x.slug === slug);
  if (!n) return null;
  return (
    <Link
      to={`/actualites/${n.slug}`}
      className="group block bg-white border border-line-1 rounded-2xl overflow-hidden transition-[box-shadow,border-color] hover:shadow-lift hover:border-transparent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-inset">
        <img src={n.img} alt="" loading="lazy" className="w-full h-full object-cover block transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]" />
      </div>
      <div className="p-5">
        <time dateTime={n.date} className="text-[11px] font-bold tracking-wider2 uppercase text-ink-3 block mb-1.5">
          {formatNewsDate(n.date)}
        </time>
        <h3 className="font-display font-extrabold text-ink-1 m-0 text-base leading-tight">{n.title}</h3>
      </div>
    </Link>
  );
}

export default function NewsDetail() {
  const { slug } = useParams();
  const article = NEWS.find((n) => n.slug === slug);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — ETS FOREVER 2`;
    return () => { document.title = DEFAULT_TITLE; };
  }, [article]);

  if (!article) return <Navigate to="/actualites" replace />;

  // Up to three other recent items (any category) as "Read more"
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${article.categoryLabel} · ${formatNewsDate(article.date)}`}
        title={article.title}
        intro={article.excerpt}
        img={article.img}
        breadcrumb={[
          { label: 'Accueil',    to: '/' },
          { label: 'Actualités', to: '/actualites' },
          { label: article.title },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="max-w-prose mx-auto">
            {article.body.map((p, i) => (
              <p key={i} className="text-base md:text-[17px] leading-[1.7] text-ink-2 m-0 mb-5 last:mb-0">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Un projet à nous confier ?"
        subtitle="Devis sous 24h. Un seul interlocuteur du premier appel à la livraison."
      />

      {related.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-8">
            <header className="mb-8 md:mb-10">
              <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3">À lire aussi</span>
              <h2 className="font-display font-extrabold text-ink-1 m-0 text-h2sm leading-[1.05] text-balance">D'autres actualités récentes.</h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {related.map((n) => <RelatedCard key={n.slug} slug={n.slug} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
