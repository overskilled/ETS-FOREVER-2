// Single source of truth for site-wide SEO constants.
// Used by <Seo /> (Helmet head) and by scripts/build-sitemap.mjs.

export const SITE_URL = 'https://etsforever2.com';
export const SITE_NAME = 'ETS FOREVER 2';
export const SITE_ALT_NAMES = ['Établissement Forever2', 'ETS Forever2'];
export const SITE_TAGLINE = 'Commerce général, import-export & BTP · Yaoundé';
export const SITE_DESCRIPTION =
  "ETS FOREVER 2 : commerce général, import-export, BTP (bâtiment & travaux publics), produits pharmaceutiques et prestations de services pour particuliers, entreprises et collectivités. Mvog-Mbi, Yaoundé.";
export const SITE_LANG = 'fr-FR';
export const SITE_LOCALE = 'fr_FR';

export const OG_IMAGE = `${SITE_URL}/banner.jpg`;
export const OG_IMAGE_ALT = 'ETS FOREVER 2 — boutique de gros à Mvog-Mbi, Yaoundé';

export const CONTACT = {
  phone:    '+237676818547',
  phoneDisplay: '+237 6 76 81 85 47',
  email:    'contact@etsforever2.com',
  whatsapp: 'https://wa.me/237676818547',
};

export const ADDRESS = {
  streetAddress:   'Mvog-Mbi',
  addressLocality: 'Yaoundé',
  addressRegion:   'Centre',
  addressCountry:  'CM',
};

// Yaoundé centre, used for geo meta tags + LocalBusiness schema.
export const GEO = {
  latitude:  3.866667,
  longitude: 11.516667,
  region:    'CM-CE',
  placename: 'Yaoundé',
};

export const RCCM = 'RC/YAO/2015/A/1378';

// Helpers
export const absUrl = (path = '/') => {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const pageTitle = (title) =>
  title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — ${SITE_TAGLINE}`;
