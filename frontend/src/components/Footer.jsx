import { Link } from 'react-router-dom';

export default function Footer() {
  const cols = [
    { title: 'Activités', links: [
      { to: '/activites/commerce',      label: 'Commerce général' },
      { to: '/activites/import-export', label: 'Import-export' },
      { to: '/activites/btp',           label: 'BTP — bâtiment & TP' },
      { to: '/activites/sante',         label: 'Santé & pharmacie' },
      { to: '/activites/services',      label: 'Prestation de services' },
    ]},
    { title: 'Maison', links: [
      { to:   '/realisations', label: 'Réalisations' },
      { href: '/#pourquoi',    label: 'Notre histoire' },
      { href: '/#process',     label: 'Notre méthode' },
      { href: '/#contact',     label: 'Nous trouver' },
    ]},
    { title: 'Contact', links: [
      { href: 'tel:+237676818547',              label: '+237 6 76 81 85 47' },
      { href: 'mailto:contact@etsforever2.com', label: 'contact@etsforever2.com' },
      { href: '/#contact', label: 'Mvog-Mbi, Yaoundé' },
      { href: '/#contact', label: 'Lun. — Sam. · 08h — 18h30' },
    ]},
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-1 text-white/80 pt-14 md:pt-20 pb-7">
      <div
        aria-hidden="true"
        className="hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 font-display font-extrabold uppercase pointer-events-none whitespace-nowrap text-white/[0.04] leading-[0.9] tracking-[-0.05em] text-[clamp(80px,18vw,280px)]"
      >
        FOREVER&nbsp;2
      </div>

      <div className="relative z-[1] max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_2fr] gap-10 md:gap-16 items-start pb-12 border-b border-white/10">
          <div className="flex gap-4 items-start">
            <div className="bg-white rounded-lg p-1.5 shrink-0">
              <img src="/assets/img/logo.png" alt="ETS Forever 2" className="block h-12 w-auto" />
            </div>
            <div>
              <h4 className="font-display text-lg font-extrabold text-white m-0 mb-2 tracking-tight">ETS FOREVER 2</h4>
              <p className="text-[13px] leading-[1.55] m-0 text-white/60">
                Établissement Forever2 — également connu sous le nom ETS Forever2.<br/>
                Commerce général · Import-export · BTP · Santé · Prestation de services<br/>
                Yaoundé, Cameroun · depuis 2014.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h5 className="font-body text-[11px] font-extrabold text-brand-secondary tracking-[0.16em] uppercase m-0 mb-4">
                  {c.title}
                </h5>
                {c.links.map((l) => l.to ? (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="block py-1 text-[13px] text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block py-1 text-[13px] text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[1] pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4">
          <p className="text-[11px] sm:text-xs m-0 text-white/55 leading-[1.6]">
            © 2026 ETS FOREVER 2 · Yaoundé · Avec vous, pour longtemps.&nbsp;·&nbsp;Commerce, import-export &amp; BTP.
          </p>
          <div className="flex gap-3.5 sm:gap-4 flex-wrap">
            {['Mentions légales', 'Confidentialité', 'etsforever2.com'].map((l) => (
              <a key={l} href="#" className="text-xs text-white/55 hover:text-white transition-colors duration-150">{l}</a>
            ))}
          </div>
        </div>

        <p className="relative z-[1] mt-5 pt-5 border-t border-white/10 text-[11px] text-white/40 leading-[1.6] m-0">
          RCCM&nbsp;RC/YAO/2015/A/1378 · Fondée en 2014, immatriculée en 2015 · Mvog-Mbi, Yaoundé, Cameroun
        </p>
      </div>
    </footer>
  );
}
