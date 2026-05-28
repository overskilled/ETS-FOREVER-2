import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const inputClass =
  'w-full font-body text-sm py-3 px-3.5 bg-white border border-line-1 rounded-md text-ink-1 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(31,107,75,0.12)]';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const reset = () => { setForm({ name: '', email: '', phone: '', message: '' }); setSent(false); };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-[120px] bg-surface border-y border-line-2"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="inline-block font-body text-[11px] font-extrabold tracking-wider2 uppercase text-brand-primary mb-3.5">
            Contact
          </span>
          <h2 className="font-display font-extrabold text-ink-1 m-0 mb-3.5 text-h2sm text-balance">
            Passez nous voir.<br/>Ou écrivez-nous.
          </h2>
          <p className="text-base text-ink-3 m-0 mb-8">
            On vous répond dans la journée. Promesse de la maison.
          </p>

          <ul className="list-none p-0 m-0 grid gap-4">
            {[
              { icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, title: 'Yaoundé — Mvog-Mbi', sub: 'À 200m du marché central' },
              { icon: <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 2 3.09 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 9a16 16 0 0 0 8 8l1.25-1.81a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1z"/>, title: '+237 6 76 81 85 47', sub: 'WhatsApp disponible', href: 'https://wa.me/237676818547?text=Bonjour%20ETS%20FOREVER%202%2C%20je%20souhaite%20un%20devis.' },
              { icon: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/></>, title: 'contact@etsforever2.com', sub: 'Réponse sous 24h', href: 'mailto:contact@etsforever2.com' },
              { icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, title: 'Lun. — Sam.', sub: '08h00 — 18h30' },
            ].map((c) => (
              <li key={c.title} className="grid grid-cols-[32px_1fr] gap-3 items-start text-brand-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">{c.icon}</svg>
                <div className="text-ink-2">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="block text-ink-1 text-[15px] font-bold hover:text-brand-primary transition-colors"
                    >
                      {c.title}
                    </a>
                  ) : (
                    <strong className="block text-ink-1 text-[15px] font-bold">{c.title}</strong>
                  )}
                  <span className="block text-[13px] text-ink-3 mt-0.5">{c.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border border-line-1 rounded-2xl p-5 sm:p-6 md:p-9 shadow-ring"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="sent" variants={fade} initial="hidden" animate="show" exit="exit" className="text-center px-2 py-4">
                <div className="w-14 h-14 rounded-full bg-brand-primary-soft text-brand-primary mx-auto mb-4 grid place-items-center">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="font-display text-[22px] font-extrabold text-ink-1 mb-2.5 tracking-tight">
                  Message reçu, {form.name || 'cher client'}.
                </h3>
                <p className="text-ink-3 m-0 mb-6 text-[15px]">
                  Nous vous rappelons dans la journée au numéro indiqué. Bonne suite, on est ensemble.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center bg-white text-ink-1 font-bold text-[15px] py-3.5 px-5 rounded-md border-[1.5px] border-line-1 transition hover:border-brand-primary hover:text-brand-primary-deep hover:bg-surface"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate variants={fade} initial="hidden" animate="show" exit="exit">
                <h3 className="font-display text-[22px] font-extrabold text-ink-1 tracking-tight m-0 mb-5">
                  Décrivez-nous votre besoin
                </h3>
                <div className="mb-4">
                  <label htmlFor="c-name" className="block text-xs font-bold text-ink-2 mb-1.5 tracking-[0.02em]">Nom complet</label>
                  <input id="c-name" required value={form.name} onChange={update('name')} placeholder="Ex. Aïssa Mbarga" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold text-ink-2 mb-1.5 tracking-[0.02em]">Email</label>
                    <input id="c-email" required type="email" value={form.email} onChange={update('email')} placeholder="prenom@exemple.cm" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-bold text-ink-2 mb-1.5 tracking-[0.02em]">Téléphone</label>
                    <input id="c-phone" required value={form.phone} onChange={update('phone')} placeholder="+237 6 76 …" className={inputClass} />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="c-msg" className="block text-xs font-bold text-ink-2 mb-1.5 tracking-[0.02em]">Votre besoin</label>
                  <textarea id="c-msg" required rows="4" value={form.message} onChange={update('message')} placeholder="Quelques mots suffisent. Nous vous rappelons pour préciser." className={`${inputClass} resize-y`} />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-brand-primary text-white font-bold text-[15px] py-4 rounded-md shadow-cta transition hover:bg-brand-primary-deep hover:shadow-cta-hover hover:text-white"
                >
                  Envoyer la demande
                </button>
                <p className="text-xs text-ink-3 mt-3 text-center">
                  Vos coordonnées ne quittent pas notre boutique. Pas de spam, jamais.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
