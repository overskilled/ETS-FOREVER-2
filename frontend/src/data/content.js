// All site content + image URLs in one place.
// Activity aligned to the RCCM (RC/YAO/2015/A/1378), activité principale:
// PRESTATION DE SERVICES – IMPORT & EXPORT – COMMERCE GÉNÉRAL – BTP.
// Local photos live in /public. Unsplash IDs are placeholders — swap for
// real ETS FOREVER photos (boutique, chantiers, marchandises) when available.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PHOTOS = {
  hero:    "/banner.jpg",     // BAO cash & carry — commerce / approvisionnement
  // hero:    unsplash('photo-1573164574572-cb89e39749b4', 900),
  why:     unsplash('photo-1521791136064-7986c2920216', 900),     // équipe au travail
  service_commerce:    "/banner.jpg",   // entrepôt cash & carry
  service_import:      "/16.jpg",        // colis / marchandises
  service_btp:         unsplash('photo-1504307651254-35680f356dfd', 900), // chantier (placeholder)
  service_prestation:  "/rdv.jpeg",      // rendez-vous d'affaires
  service_fourniture:  "/commerce.jpg",  // marchandises en rayon
  service_appro:       "/16.jpg",        // colis / logistique
  service_pharma:      unsplash('photo-1587854692152-cbe660dbde88', 900), // pharmacie / médical (placeholder)
};

export const STATS = [
  { value: 1200, suffix: '+', label: 'Chantiers & commandes\nlivrés' },
  { value: 24, suffix: 'h', label: 'Délai moyen\npour un devis' },
  { value: 12, suffix: ' ans', label: "D'expérience\nà Yaoundé" },
];

export const NAV = [
  { href: '#services',     label: 'Activités' },
  { href: '#pourquoi',     label: 'Pourquoi nous' },
  { href: '#process',      label: 'Notre méthode' },
  { href: '#temoignages',  label: 'Témoignages' },
  { href: '#contact',      label: 'Contact' },
];

export const SERVICES = [
  {
    img: PHOTOS.service_commerce,
    tag: 'Gros & détail',
    title: 'Commerce général',
    desc: 'Vente et distribution de marchandises, en gros comme au détail, pour foyers, commerces et collectivités.',
    price: 'prix grossiste',
    span: 'feature',  // bento: 5 cols × 2 rows (tall feature)
  },
  {
    img: PHOTOS.service_import,
    tag: 'International',
    title: 'Import-export',
    desc: "Sourcing à l'international, dédouanement et acheminement. Vos marchandises de l'usine jusqu'à votre porte.",
    price: 'sur devis',
    span: 'wide',     // bento: 7 cols × 1 row (horizontal)
  },
  {
    img: PHOTOS.service_btp,
    tag: 'Bâtiment & TP',
    title: 'BTP — bâtiment & travaux publics',
    desc: 'Construction, rénovation, gros et second œuvre, voirie. Des chantiers menés dans les règles, livrés dans les délais.',
    price: 'sur étude',
    span: 'wide',     // bento: 7 cols × 1 row (horizontal)
  },
  {
    img: PHOTOS.service_prestation,
    tag: 'Sur mesure',
    title: 'Prestation de services',
    desc: "Des services aux entreprises et aux particuliers, pensés sur mesure et exécutés par une équipe qui répond.",
    price: 'sur devis',
    span: 'third',    // bento: 4 cols × 1 row
  },
  {
    img: PHOTOS.service_fourniture,
    tag: 'Équipement',
    title: 'Fournitures & équipements',
    desc: 'Matériaux, outillage et équipements pour vos chantiers, vos bureaux et vos points de vente.',
    price: 'devis gratuit',
    span: 'third',
  },
  {
    img: PHOTOS.service_appro,
    tag: 'Logistique',
    title: 'Approvisionnement & logistique',
    desc: "Commandes groupées, livraison sur chantier ou en boutique, suivi jusqu'à la réception.",
    price: 'livraison incluse',
    span: 'third',
  },
  {
    img: PHOTOS.service_pharma,
    tag: 'Médical',
    title: 'Santé & produits pharmaceutiques',
    desc: "Approvisionnement et distribution de produits pharmaceutiques, consommables et matériel médical, encadrés par une expertise en sciences pharmaceutiques.",
    price: 'sur devis',
    span: 'banner',   // bento: pleine largeur (12 cols)
  },
];

export const WHY_POINTS = [
  { title: 'Interlocuteur unique',    desc: 'La même personne suit votre dossier du début à la fin.' },
  { title: 'Devis en 24h',            desc: 'Clair, détaillé, sans frais cachés. Vous décidez en connaissance de cause.' },
  { title: 'Paiement à la livraison', desc: "Vous payez quand on a livré. Pas avant. Notre engagement." },
  { title: '1 200+ chantiers & commandes', desc: 'Particuliers, PME, grandes structures. La confiance se gagne, on la garde.' },
];

export const STEPS = [
  { n: '01', title: 'Vous nous parlez',          desc: 'Au téléphone, en boutique, ou en ligne. On écoute, on cadre, on chiffre.' },
  { n: '02', title: 'On vous propose un devis',  desc: 'Clair, détaillé, sous 24h. Pas de frais cachés, pas de surprise.' },
  { n: '03', title: 'On exécute',                desc: 'Approvisionnement, travaux, livraison. Vous êtes informé à chaque étape.' },
  { n: '04', title: 'On reste joignable',        desc: 'Même après livraison. Le même interlocuteur, pour toutes vos questions.' },
];

export const QUOTES = [
  {
    quote: "Trois ans qu'ils approvisionnent nos chantiers. Livraisons à l'heure, jamais de rupture. C'est rare, et ça vaut de l'or.",
    name: 'Aïssa Mbarga',
    role: 'Gérante · Entreprise de BTP',
    city: 'Yaoundé',
  },
  {
    quote: "Commande importée et dédouanée en quelques semaines, livrée à l'atelier. J'ai recommandé toute mon équipe à ETS FOREVER 2.",
    name: 'Emmanuel Biya',
    role: 'Entrepreneur · Import',
    city: 'Bastos',
  },
  {
    quote: "On y va comme on va chez un parent. On nous accueille, on nous conseille, on nous rappelle. C'est ça la différence.",
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
    quote: "L'écoute fait toute la différence. On se sent considéré, pas un numéro de commande.",
    name: 'Christelle Ondoa',
    role: 'Architecte',
    city: 'Yaoundé',
  },
];

export const MARQUEE_WORDS = [
  'Mvog-Mbi', 'Yaoundé', 'Bastos', 'Mbalmayo', 'Bafoussam', 'Douala',
  'Commerce général', 'Import-export', 'BTP', 'Travaux publics',
  'Matériaux', 'Prestation de services', 'Produits pharmaceutiques', 'Santé',
];
