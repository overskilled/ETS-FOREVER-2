const WHATSAPP_HREF = 'https://wa.me/237676818547?text=Bonjour%20ETS%20FOREVER%202%2C%20je%20souhaite%20un%20devis.';

export default function CTABanner({
  title = 'Un projet, une commande, une question ?',
  subtitle = 'Devis sous 24h. Un seul interlocuteur, du premier appel à la livraison.',
}) {
  return (
    <section className="py-14 md:py-20 bg-brand-primary-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(226,162,59,0.12)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      <div className="relative z-[1] max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-center">
        <div>
          <h2 className="font-display font-extrabold text-white m-0 mb-3 text-h2sm leading-[1.05] text-balance">{title}</h2>
          <p className="text-base md:text-[17px] leading-[1.55] text-white/75 max-w-[520px] m-0">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:items-stretch md:justify-end">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-secondary text-ink-1 font-bold text-[15px] py-3.5 px-5 rounded-md transition hover:bg-brand-secondary-deep hover:text-ink-1 hover:-translate-y-px active:translate-y-px"
          >
            Demander un devis
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold text-[15px] py-3.5 px-5 rounded-md border-[1.5px] border-white/30 transition hover:border-white hover:bg-white/[0.06] hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.213.342-1.005 3.667 3.771-.968z"/>
            </svg>
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
