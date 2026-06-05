import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[12px] font-semibold tracking-wider2 uppercase text-ink-3">
      <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-2">
              {isLast || !it.to ? (
                <span aria-current={isLast ? 'page' : undefined} className="text-ink-2">{it.label}</span>
              ) : (
                <Link to={it.to} className="text-ink-3 hover:text-brand-primary transition-colors">{it.label}</Link>
              )}
              {!isLast && <span aria-hidden="true" className="text-ink-3/60">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
