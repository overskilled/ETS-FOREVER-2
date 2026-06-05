// News feed for /actualites.
// Placeholder content — swap in real announcements as they happen.
// Keep entries in descending date order; the homepage and listing
// both rely on array order to surface the most recent first.

import { PHOTOS } from './content';

const FR_DATE = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatNewsDate = (iso) => FR_DATE.format(new Date(iso));

export const NEWS_CATEGORIES = [
  { slug: 'all',           label: 'Toutes' },
  { slug: 'annonces',      label: 'Annonces' },
  { slug: 'chantiers',     label: 'Chantiers' },
  { slug: 'partenariats',  label: 'Partenariats' },
];

export const NEWS = [
  {
    slug: 'chantier-r3-bastos-demarrage',
    category: 'chantiers',
    categoryLabel: 'Chantiers',
    title: "Démarrage du chantier R+3 commercial à Bastos",
    date: '2026-05-20',
    img: PHOTOS.service_btp,
    excerpt: "Pose de la première pierre d'un immeuble commercial de quatre niveaux à Bastos. Livraison contractuelle prévue fin 2026.",
    body: [
      "Le chantier d'un immeuble R+3 a démarré officiellement le 18 mai à Bastos, après six semaines de préparation et de validation des plans. La structure, en béton armé, accueillera 1 600 m² de surface commerciale et de bureaux locatifs.",
      "ETS FOREVER 2 assure le gros œuvre, le second œuvre et la coordination des corps d'état secondaires. Livraison contractuelle prévue pour novembre 2026, avec mise en service progressive des plateaux dès septembre.",
      "Le client, une PME du secteur tertiaire, a retenu ETS FOREVER 2 pour son modèle d'interlocuteur unique du devis à la réception.",
    ],
  },
  {
    slug: 'marche-fourniture-reconduit-2026',
    category: 'annonces',
    categoryLabel: 'Annonces',
    title: "Marché de fourniture annuelle reconduit pour 2026",
    date: '2026-04-12',
    img: PHOTOS.service_appro,
    excerpt: "Le marché d'approvisionnement d'une administration locale du Centre, partenaire depuis 2023, est reconduit pour une troisième année.",
    body: [
      "L'administration locale partenaire d'ETS FOREVER 2 depuis 2023 a reconduit son marché annuel d'approvisionnement pour 2026, à l'issue d'un appel d'offres restreint.",
      "Le marché couvre les fournitures courantes (papeterie, consommables, hygiène) et le mobilier de bureau ponctuel, avec un volume mensuel négocié sur les douze prochains mois.",
      "C'est la troisième reconduction sans interruption, signe d'une exécution conforme aux attentes : factures conformes, livraisons à date, et zéro réclamation post-livraison sur les trois exercices.",
    ],
  },
  {
    slug: 'partenariat-sourcing-turquie',
    category: 'partenariats',
    categoryLabel: 'Partenariats',
    title: "Accord de sourcing avec un grossiste électrique d'Istanbul",
    date: '2026-03-25',
    img: PHOTOS.service_import,
    excerpt: "Une nouvelle route d'approvisionnement régulière s'ouvre depuis la Turquie pour le matériel électrique, en complément des canaux existants.",
    body: [
      "Un accord-cadre de sourcing a été signé avec un grossiste électrique basé à Istanbul, permettant à ETS FOREVER 2 d'offrir à ses clients camerounais des prix négociés sur une gamme étendue de matériel électrique.",
      "L'accord couvre les conditions FOB, les délais de production et les modalités de groupage. Les premières expéditions sont prévues pour le second trimestre 2026, par conteneurs 40' au départ d'Istanbul.",
      "Cette ouverture complète les routes existantes (Chine, Union Européenne, Inde) et permet de mieux mutualiser les conteneurs entre clients de la diaspora et importateurs camerounais.",
    ],
  },
  {
    slug: 'lancement-activite-sante-pharmacie',
    category: 'annonces',
    categoryLabel: 'Annonces',
    title: "Lancement officiel de l'activité Santé & pharmacie",
    date: '2026-02-15',
    img: PHOTOS.service_pharma,
    excerpt: "Une nouvelle activité dédiée à la distribution B2B de produits pharmaceutiques et de matériel médical, sous encadrement pharmaceutique.",
    body: [
      "ETS FOREVER 2 inaugure une activité dédiée à la distribution B2B de produits pharmaceutiques, consommables médicaux et matériel de pharmacie.",
      "L'activité s'appuie sur un profil interne en sciences pharmaceutiques pour valider chaque commande, garantir la traçabilité lot par lot et veiller à la conformité aux exigences MINSANTE.",
      "Les premiers clients sont des pharmacies indépendantes et des dispensaires de la région du Centre. L'activité est strictement B2B : pas de vente au comptoir, pas de porte-à-porte.",
    ],
  },
  {
    slug: 'reception-conteneurs-inde-pharma',
    category: 'chantiers',
    categoryLabel: 'Chantiers',
    title: "Réception de deux conteneurs pharma depuis l'Inde",
    date: '2026-01-30',
    img: PHOTOS.service_import,
    excerpt: "Deux conteneurs 40' de consommables médicaux et de petit matériel pharmaceutique, réceptionnés à Mvog-Mbi pour douze officines.",
    body: [
      "Deux conteneurs 40' chargés de consommables médicaux et de petit matériel pharmaceutique ont été réceptionnés fin janvier à l'entrepôt de Mvog-Mbi.",
      "La commande, mutualisée entre douze pharmacies indépendantes, a été pilotée par ETS FOREVER 2 du bon de commande FOB à la mise en distribution, avec dédouanement à Douala et transit jusqu'à Yaoundé en dix semaines.",
      "Chaque référence livrée est accompagnée de la documentation lot par lot (certificats, dates de péremption), conformément aux exigences de traçabilité MINSANTE.",
    ],
  },
  {
    slug: 'marche-public-mairie-reconduit',
    category: 'annonces',
    categoryLabel: 'Annonces',
    title: "Marché public d'une mairie reconduit pour 2026",
    date: '2025-12-10',
    img: PHOTOS.service_appro,
    excerpt: "La mairie locale du Centre, partenaire depuis 2023, notifie la reconduction de son marché annuel d'approvisionnement.",
    body: [
      "La mairie locale du Centre, partenaire depuis 2023, a notifié à ETS FOREVER 2 la reconduction de son marché annuel d'approvisionnement pour l'exercice 2026.",
      "La décision est intervenue à l'issue d'un appel d'offres ouvert, ETS FOREVER 2 ayant retenu la mieux-disante sur prix et délais.",
      "Le marché couvre fournitures, mobilier et équipement, pour livraison mensuelle programmée sur douze mois.",
    ],
  },
  {
    slug: 'partenariat-fournisseur-mumbai',
    category: 'partenariats',
    categoryLabel: 'Partenariats',
    title: "Accord avec un fabricant pharmaceutique certifié à Mumbai",
    date: '2025-11-18',
    img: PHOTOS.service_pharma,
    excerpt: "Sourcing régulier de consommables médicaux et de petit matériel auprès d'un partenaire indien certifié.",
    body: [
      "ETS FOREVER 2 a conclu un accord-cadre de sourcing avec un fabricant certifié basé à Mumbai, spécialisé dans les consommables médicaux et le petit matériel pharmaceutique.",
      "L'accord garantit la traçabilité lot par lot, des conditions FOB préférentielles et un délai de production maîtrisé. Toutes les références sourcées via ce canal font l'objet d'une validation pharmaceutique préalable.",
      "Premier lot expédié en décembre 2025, distribution dans les officines membres prévue dès février 2026.",
    ],
  },
  {
    slug: 'reception-rehabilitation-ecole',
    category: 'chantiers',
    categoryLabel: 'Chantiers',
    title: "Réception du chantier de réhabilitation d'une école publique",
    date: '2025-09-05',
    img: PHOTOS.service_btp,
    excerpt: "Trois blocs de salles de classe, sanitaires et cour livrés en quatre mois — réception conforme avant la rentrée.",
    body: [
      "Le chantier de réhabilitation de trois blocs d'une école publique de Mvog-Mbi a été livré en quatre mois, conformément au calendrier convenu avec le maître d'ouvrage.",
      "Le périmètre incluait la dépose et la reprise complète de la toiture, le remplacement des menuiseries, la reprise des sanitaires et la peinture intérieure-extérieure, ainsi que la réfection de la cour.",
      "La réception, conjointe avec un représentant MINEDUB, a été prononcée sans réserve quelques jours avant la rentrée scolaire.",
    ],
  },
];
