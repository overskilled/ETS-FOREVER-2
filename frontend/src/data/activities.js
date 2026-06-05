// Detailed copy per activity, used by /activites/:slug pages.
// Slugs are the URL segment AND the key into this map.

import { PHOTOS } from './content.js';

export const ACTIVITY_SLUGS = ['commerce', 'import-export', 'btp', 'sante', 'services'];

export const ACTIVITIES = {
  commerce: {
    slug: 'commerce',
    tag: 'Gros & détail',
    title: 'Commerce général',
    short: 'Vente et distribution de marchandises pour foyers, commerces, écoles et collectivités.',
    img: PHOTOS.service_commerce,
    overview: [
      "ETS FOREVER 2 opère depuis Mvog-Mbi un négoce généraliste capable de répondre à des commandes au détail comme à de gros volumes pour des marchés institutionnels.",
      "Notre stock permanent et notre réseau d'importation nous permettent de tenir des prix grossistes sans rupture, avec des factures conformes pour les marchés publics et privés.",
    ],
    subServices: [
      { title: 'Produits alimentaires en gros',        desc: 'Riz, huile, conserves, pâtes — palettes et conteneurs.' },
      { title: 'Boissons & PGC',                       desc: 'Eau, sodas, hygiène, entretien — réassort hebdomadaire.' },
      { title: 'Équipement de bureau',                 desc: 'Papeterie, mobilier, consommables — devis administrations.' },
      { title: 'Fournitures scolaires',                desc: 'Manuels, cahiers, kits — campagnes de rentrée.' },
      { title: 'Achats sur commande',                  desc: "Vous nous donnez la référence, on s'occupe du sourcing." },
      { title: 'Marchés publics & collectivités',      desc: 'RCCM, NIU, attestations à disposition pour les appels d\'offres.' },
    ],
    commitments: [
      { title: 'Prix grossiste',          desc: "Tarifs négociés, dégressifs selon volume — toujours par écrit." },
      { title: 'Stock permanent',         desc: "Les références courantes sont disponibles immédiatement." },
      { title: 'Livraison Yaoundé 24-72h', desc: 'Camionnettes propres, suivi par appel à chaque étape.' },
      { title: 'Factures conformes',      desc: "Pour comptabilité, marchés publics, déclaration fiscale." },
    ],
    faq: [
      { q: 'Puis-je commander en gros sans contrat préalable ?',
        a: "Oui. Un simple devis vous engage. Nous livrons à réception du paiement ou selon les modalités convenues pour les comptes récurrents." },
      { q: 'Quels sont vos délais de livraison ?',
        a: 'Yaoundé : 24 à 72 heures selon disponibilité. Reste du Cameroun : nous étudions chaque demande et chiffrons le transport.' },
      { q: 'Acceptez-vous les marchés publics ?',
        a: "Oui. RCCM RC/YAO/2015/A/1378, NIU et attestations à disposition. Nous savons monter un dossier d'appel d'offres." },
      { q: 'Quelles modalités de paiement ?',
        a: 'Espèces, virement bancaire, Mobile Money (MTN / Orange) et chèques certifiés.' },
    ],
    related: ['import-export', 'services'],
  },

  'import-export': {
    slug: 'import-export',
    tag: 'International',
    title: 'Import-export',
    short: "Sourcing international, dédouanement et acheminement. Vos marchandises de l'usine d'origine jusqu'à votre porte.",
    img: PHOTOS.service_import,
    overview: [
      "Nous travaillons depuis dix ans avec des fournisseurs en Chine, en Europe, en Turquie, au Maroc et en Inde. Pour vous, ça veut dire un seul interlocuteur du devis usine à la livraison Yaoundé.",
      "Le pilotage douanier est interne : codification HS, droits, TVA, transit. Vous savez exactement ce que coûte votre commande avant de signer.",
    ],
    subServices: [
      { title: 'Sourcing & négociation',           desc: 'Nous identifions les fournisseurs et négocions les conditions FOB.' },
      { title: 'Achats groupés',                   desc: 'Mutualisation des conteneurs entre clients pour réduire le coût unitaire.' },
      { title: 'Transit & dédouanement',           desc: 'Déclaration en douane, mainlevée, suivi des taxes.' },
      { title: 'Acheminement port → entrepôt',     desc: 'Douala / Kribi → Yaoundé, avec assurance et tracking.' },
      { title: 'Conseil import',                   desc: 'HS code, taxes, normes ANOR, certificats de conformité.' },
      { title: 'Export régional',                  desc: 'Réexpédition vers les pays voisins de la CEMAC sur demande.' },
    ],
    commitments: [
      { title: 'Devis global tout-compris',  desc: 'FOB, fret maritime, assurance, douane, transport local — un seul chiffre.' },
      { title: 'Traçabilité conteneur',      desc: "B/L, statut douane, ETA — partagés à chaque étape." },
      { title: 'Conformité réglementaire',   desc: "ANOR, attestations d'origine, normes sanitaires." },
      { title: 'Aucun frais caché',          desc: "Si une taxe inattendue apparaît, on l'absorbe ou on la justifie." },
    ],
    faq: [
      { q: "Depuis quels pays sourcez-vous ?",
        a: "Principalement Chine, Union Européenne, Turquie, Maroc, Inde. Pour d'autres origines, on étudie la faisabilité." },
      { q: "Quel délai moyen d'une importation ?",
        a: "6 à 10 semaines depuis Chine, 4 à 6 depuis l'Europe — du bon de commande à la livraison Yaoundé." },
      { q: "Y a-t-il un volume minimum ?",
        a: "Non, mais nous recommandons le groupage : nous mutualisons votre commande avec d'autres pour optimiser le fret." },
      { q: "Quels coûts sont inclus dans le devis ?",
        a: "FOB usine, fret maritime, assurance, douane, transport Douala-Yaoundé, livraison finale. Aucun frais caché." },
    ],
    related: ['commerce', 'btp'],
  },

  btp: {
    slug: 'btp',
    tag: 'Bâtiment & TP',
    title: 'BTP — bâtiment & travaux publics',
    short: 'Construction, rénovation, gros et second œuvre, voirie. Des chantiers menés dans les règles, livrés dans les délais.',
    img: PHOTOS.service_btp,
    overview: [
      "ETS FOREVER 2 intervient sur des chantiers neufs et de rénovation pour particuliers, entreprises et institutions, principalement sur la région du Centre.",
      "Notre équipe technique pilote le gros œuvre, le second œuvre et la voirie. Nous travaillons avec des bureaux d'études partenaires pour les volets structure et conformité.",
    ],
    subServices: [
      { title: "Construction neuve",          desc: 'Habitat, commercial, équipements publics — du terrassement à la réception.' },
      { title: "Rénovation & réhabilitation", desc: 'Reprise de bâtiment, mise aux normes, extension.' },
      { title: "Voirie & assainissement",     desc: "Routes secondaires, dalots, réseaux d'eau pluviale." },
      { title: "Second œuvre",                desc: 'Plomberie, électricité, carrelage, peinture, finitions.' },
      { title: "Études & maîtrise d'œuvre",   desc: "Avec partenaires agréés : plans, métrés, suivi technique." },
      { title: "Approvisionnement chantier",  desc: 'Ciment, fer, agrégats, hourdis livrés sur site, dans les délais.' },
    ],
    commitments: [
      { title: 'Devis ferme',           desc: 'Pas de surprise en cours de chantier. Variantes chiffrées avant signature.' },
      { title: 'Sécurité chantier',     desc: "EPI, balisage, conformité aux règles de l'art." },
      { title: 'Reporting hebdomadaire', desc: 'Photos, avancement, dépenses — par WhatsApp ou en présentiel.' },
      { title: 'Garantie d\'achèvement', desc: 'Conformes à la réglementation OHADA et aux standards locaux.' },
    ],
    faq: [
      { q: "Sur quelles zones intervenez-vous ?",
        a: "Yaoundé et région du Centre par défaut. Hors région, déplacement sur étude (logements équipe inclus dans le devis)." },
      { q: "Réalisez-vous les études techniques ?",
        a: "Nous nous appuyons sur des bureaux d'études partenaires agréés pour les calculs structure et la conformité." },
      { q: "Comment suivez-vous l'avancement ?",
        a: "Reporting hebdomadaire avec photos, plus visite sur demande. Vous avez accès au chef de chantier à tout moment." },
      { q: "Quelles garanties offrez-vous ?",
        a: "Garantie de parfait achèvement et garantie décennale conformes à la réglementation OHADA et aux usages locaux." },
    ],
    related: ['import-export', 'commerce'],
  },

  sante: {
    slug: 'sante',
    tag: 'Médical',
    title: 'Santé & produits pharmaceutiques',
    short: "Approvisionnement et distribution de produits pharmaceutiques, consommables et matériel médical, encadrés par une expertise en sciences pharmaceutiques.",
    img: PHOTOS.service_pharma,
    overview: [
      "Cette activité est encadrée par un profil en sciences pharmaceutiques au sein de l'équipe, garant de la conformité réglementaire camerounaise et de la qualité de ce que nous distribuons.",
      "Nous travaillons uniquement en B2B : pharmacies indépendantes, dispensaires, structures de santé et ONG. La traçabilité lot par lot est non négociable.",
    ],
    subServices: [
      { title: 'Produits pharmaceutiques',       desc: 'OTC et sur prescription, dans le respect de la réglementation MINSANTE.' },
      { title: 'Consommables médicaux',          desc: 'Gants, seringues, pansements, masques, désinfectants.' },
      { title: 'Matériel médical',               desc: 'Tensiomètres, thermomètres, oxymètres, petits appareils.' },
      { title: 'Équipement de pharmacie',        desc: 'Mobilier officinal, vitrines, étiqueteuses, balances.' },
      { title: 'Sourcing pour pharmacies',       desc: 'Vous nous donnez la liste, on chiffre et on livre.' },
      { title: 'Approvisionnement structures',   desc: 'Hôpitaux, dispensaires, ONG, marchés publics santé.' },
    ],
    commitments: [
      { title: 'Produits authentiques',  desc: 'Sourcing certifié uniquement. Lutte active contre les contrefaçons.' },
      { title: 'Traçabilité lot par lot', desc: 'Numéro de lot, date de péremption, certificat sur demande.' },
      { title: 'Encadrement pharma',     desc: "Un professionnel en sciences pharmaceutiques valide chaque commande." },
      { title: 'Conformité MINSANTE',    desc: 'Autorisations, déclarations, homologations à jour.' },
    ],
    faq: [
      { q: "Vos produits sont-ils homologués au Cameroun ?",
        a: "Oui. Nous nous conformons aux exigences du MINSANTE et de l'OCEAC. Les certificats sont fournis sur demande." },
      { q: "Vendez-vous au public au comptoir ?",
        a: "Non. Notre activité santé est strictement B2B : pharmacies, dispensaires, structures de santé, ONG, marchés publics." },
      { q: "Comment garantissez-vous contre les contrefaçons ?",
        a: "Sourcing exclusif auprès de fournisseurs certifiés, et traçabilité lot par lot. Aucun produit d'origine douteuse n'entre dans notre stock." },
      { q: "Quels sont vos délais d'approvisionnement ?",
        a: "48 à 72 heures sur les références en stock. 2 à 4 semaines pour les imports spécifiques." },
    ],
    related: ['import-export', 'services'],
  },

  services: {
    slug: 'services',
    tag: 'Sur mesure',
    title: 'Prestation de services',
    short: "Des services aux entreprises et aux particuliers, pensés sur mesure et exécutés par une équipe qui répond.",
    img: PHOTOS.service_prestation,
    overview: [
      "C'est la rubrique « tout le reste » : ce que vous nous demandez et qui n'entre pas dans les quatre autres pillars. Nous l'étudions, nous chiffrons, nous exécutons.",
      "Approvisionnement, logistique, gestion de stock, représentation commerciale, missions ponctuelles : un seul interlocuteur, un devis clair, des délais tenus.",
    ],
    subServices: [
      { title: 'Approvisionnement & logistique', desc: "Commandes groupées, livraison sur chantier ou en boutique, suivi jusqu'à réception." },
      { title: 'Gestion de stock pour tiers',    desc: 'Nous stockons et expédions vos marchandises depuis Mvog-Mbi.' },
      { title: 'Assistance aux PME',             desc: "Organisation, achats, conseil opérationnel — pour les structures sans direction achats." },
      { title: 'Représentation commerciale',     desc: "Vous êtes hors du Cameroun ? On vous représente sur place." },
      { title: 'Sous-traitance ponctuelle',      desc: "Manutention, courses, livraisons spéciales, démarches sur place." },
      { title: 'Conseil opérationnel',           desc: 'Études, recommandations, accompagnement court ou long.' },
    ],
    commitments: [
      { title: 'Premier contact 24h',  desc: 'Téléphone, WhatsApp ou formulaire — on revient vers vous dans la journée.' },
      { title: 'Devis sous 24-48h',    desc: 'Clair, détaillé, sans frais cachés.' },
      { title: 'Interlocuteur unique', desc: 'La même personne suit votre mission du début à la fin.' },
      { title: 'Forfait ou régie',     desc: "Selon ce qui convient à votre besoin et à votre budget." },
    ],
    faq: [
      { q: "Comment vous solliciter ?",
        a: "Téléphone, WhatsApp (+237 6 76 81 85 47), formulaire en ligne ou passage en boutique à Mvog-Mbi." },
      { q: "Sous quels délais répondez-vous ?",
        a: "Premier contact dans les 24 heures. Devis sous 24 à 48 heures selon la complexité." },
      { q: "Travaillez-vous au forfait ou en régie ?",
        a: "Les deux. Pour les missions cadrées, forfait ferme. Pour les missions ouvertes, régie avec plafond." },
      { q: "Pouvez-vous gérer une mission récurrente ?",
        a: "Oui. Contrat mensuel ou trimestriel, avec un interlocuteur dédié et un point régulier." },
    ],
    related: ['commerce', 'sante'],
  },
};
