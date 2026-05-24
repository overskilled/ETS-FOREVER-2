// All site content + image URLs in one place.
// Images use Unsplash IDs targeting Black/African professional subjects.
// Verify each one matches the intent and swap any that don't fit.
// Replace with real photos of the boutique (Mvog-Mbi) when available.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PHOTOS = {
  hero:    "/banner.jpg",     
  // hero:    unsplash('photo-1573164574572-cb89e39749b4', 900), 
  why:     unsplash('photo-1521791136064-7986c2920216', 900),     // collaboration
  service_dossiers:       unsplash('photo-1521791055366-0d553872125f', 700),
  service_commerce:       "/16.jpg",
  service_authentif:      "/legislation.gif",
  service_rdv:            "/rdv.jpeg",
  service_permis:         unsplash('photo-1581094289810-adf5d25690e3', 700),
  service_conseil:        unsplash('photo-1573497019418-b400bb3ab074', 700),
};

export const STATS = [
  { value: 1200, suffix: '+', label: 'Dossiers traités\ncette année' },
  { value: 24, suffix: 'h', label: 'Délai moyen\npour un devis' },
  { value: 12, suffix: ' ans', label: "D'expérience\nà Yaoundé" },
];

export const NAV = [
  { href: '#services',     label: 'Services' },
  { href: '#pourquoi',     label: 'Pourquoi nous' },
  { href: '#process',      label: 'Notre méthode' },
  { href: '#temoignages',  label: 'Témoignages' },
  { href: '#contact',      label: 'Contact' },
];

export const SERVICES = [
  {
    img: PHOTOS.service_dossiers,
    tag: 'Entreprises',
    title: 'Constitution de dossiers',
    desc: "Création d'entreprise, NIU, registre de commerce. Vos démarches prises en charge de A à Z.",
    price: 'dès 25 000 FCFA',
    span: 'feature',  // bento: 5 cols × 2 rows (tall feature)
  },
  {
    img: PHOTOS.service_commerce,
    tag: 'Particuliers',
    title: 'Commerce général',
    desc: 'Fournitures de bureau, équipements, prestations sur mesure pour foyers et collectivités.',
    price: 'devis gratuit',
    span: 'wide',     // bento: 7 cols × 1 row (horizontal)
  },
  {
    img: PHOTOS.service_authentif,
    tag: 'Tous publics',
    title: 'Authentifications & légalisations',
    desc: 'Copies certifiées, traductions assermentées, validation auprès des ministères.',
    price: 'à partir de 5 000 FCFA',
    span: 'wide',     // bento: 7 cols × 1 row (horizontal)
  },
  {
    img: PHOTOS.service_rdv,
    tag: 'Entreprises',
    title: 'Rendez-vous administratifs',
    desc: "Prise de RDV, accompagnement en préfecture, suivi en temps réel jusqu'à délivrance.",
    price: 'forfait journée',
    span: 'third',    // bento: 4 cols × 1 row
  },
  {
    img: PHOTOS.service_permis,
    tag: 'Particuliers',
    title: 'Permis & passeport',
    desc: 'Constitution de votre dossier, suivi du dépôt, retrait en votre nom à la date prévue.',
    price: 'tout compris',
    span: 'third',
  },
  {
    img: PHOTOS.service_conseil,
    tag: 'Entreprises',
    title: 'Conseil & conformité',
    desc: 'Mise en règle fiscale, sociale, et accompagnement annuel auprès des administrations.',
    price: 'sur abonnement',
    span: 'third',
  },
];

export const WHY_POINTS = [
  { title: 'Interlocuteur unique',    desc: 'La même personne suit votre dossier du début à la fin.' },
  { title: 'Devis en 24h',            desc: 'Clair, détaillé, sans frais cachés. Vous décidez en connaissance de cause.' },
  { title: 'Paiement à la livraison', desc: "Vous payez quand on a livré. Pas avant. Notre engagement." },
  { title: '1 200+ dossiers traités', desc: 'Particuliers, PME, grandes structures. La confiance se gagne, on la garde.' },
];

export const STEPS = [
  { n: '01', title: 'Vous nous parlez',          desc: 'Au téléphone, en boutique, ou en ligne. On écoute, on cadre, on chiffre.' },
  { n: '02', title: 'On vous propose un devis',  desc: 'Clair, détaillé, sous 24h. Pas de frais cachés, pas de surprise.' },
  { n: '03', title: 'On exécute',                desc: 'Constitution des dossiers, achats, déplacements. Vous êtes informé à chaque étape.' },
  { n: '04', title: 'On reste joignable',        desc: 'Même après livraison. Le même interlocuteur, pour toutes vos questions.' },
];

export const QUOTES = [
  {
    quote: "Trois ans qu'ils s'occupent des dossiers de mon agence. Aucun retard, jamais. C'est rare, et ça vaut de l'or.",
    name: 'Aïssa Mbarga',
    role: 'Gérante · Agence immobilière',
    city: 'Yaoundé',
  },
  {
    quote: "Mon NIU obtenu en cinq jours, papier en main. J'ai recommandé toute mon équipe à ETS FOREVER 2.",
    name: 'Emmanuel Biya',
    role: 'Entrepreneur',
    city: 'Bastos',
  },
  {
    quote: "On y va comme on va chez un parent. On nous accueille, on nous explique, on nous rappelle. C'est ça la différence.",
    name: 'Sandra Fokam',
    role: 'Particulier',
    city: 'Mvog-Mbi',
  },
  {
    quote: "Délais respectés, prix tenu. Pour une PME comme la nôtre, c'est un partenaire essentiel.",
    name: 'Paul Nkoa',
    role: 'Directeur · PME logistique',
    city: 'Douala',
  },
  {
    quote: "L'écoute fait toute la différence. On se sent considéré, pas un numéro de dossier.",
    name: 'Christelle Ondoa',
    role: 'Architecte',
    city: 'Yaoundé',
  },
];

export const MARQUEE_WORDS = [
  'Mvog-Mbi', 'Yaoundé', 'Bastos', 'Mbalmayo', 'Bafoussam', 'Douala',
  'Constitution dossiers', 'NIU', 'Registre commerce', 'Passeport',
  'Légalisations', 'Conseil fiscal',
];
