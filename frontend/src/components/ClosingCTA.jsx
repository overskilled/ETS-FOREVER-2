const WHATSAPP_HREF = 'https://wa.me/237676818547?text=Bonjour%20ETS%20FOREVER%202%2C%20je%20souhaite%20un%20devis.';

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-1 text-white py-20 md:py-28 lg:py-32">
      {/* Soft warm radial accent in the top-right */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_25%,rgba(226,162,59,0.20)_0%,transparent_55%),radial-gradient(circle_at_15%_85%,rgba(31,107,75,0.18)_0%,transparent_55%)]" />

      <div className="relative max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-end">
        <div>
          <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-secondary mb-4">
            Construisons ensemble
          </span>
          <h2 className="font-display font-extrabold text-white text-balance leading-[0.95] tracking-tightest text-[clamp(48px,8vw,116px)] m-0 mb-5 md:mb-6">
            Bâtissons<br />ensemble.
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-[1.55] max-w-[520px] m-0">
            Un projet, une commande, un dépannage — on regarde, on chiffre,
            on livre. Premier appel sous 24h, un seul interlocuteur du
            premier mot au dernier carton.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end shrink-0">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-brand-secondary text-ink-1 font-bold text-[15px] py-3.5 pl-5 pr-2 rounded-full transition-colors hover:bg-brand-secondary-deep"
          >
            Demander un devis
            <span className="w-9 h-9 grid place-items-center bg-ink-1 text-brand-secondary rounded-full transition-transform group-hover:translate-x-0.5">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold text-[14px] py-3 px-5 rounded-full border border-white/25 transition hover:border-white hover:bg-white/[0.06] hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.213.342-1.005 3.667 3.771-.968z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Giant brand watermark at the bottom — Steevlp-style */}
      <div
        aria-hidden="true"
        className="relative mt-16 md:mt-20 lg:mt-24 select-none pointer-events-none overflow-hidden"
      >
        <p className="font-display font-extrabold text-white/[0.06] tracking-tightest leading-none uppercase text-[clamp(80px,18vw,240px)] m-0 whitespace-nowrap text-center">
          ETS FOREVER 2
        </p>
      </div>
    </section>
  );
}
