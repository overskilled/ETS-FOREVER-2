// schema.org JSON-LD builders for structured data injected into <head>.
// Validate output at https://validator.schema.org/ and https://search.google.com/test/rich-results

import {
  SITE_URL,
  SITE_NAME,
  SITE_ALT_NAMES,
  SITE_DESCRIPTION,
  SITE_LANG,
  CONTACT,
  ADDRESS,
  GEO,
  RCCM,
  absUrl,
} from './seo.js';

const orgRef = { '@type': 'Organization', name: SITE_NAME, '@id': `${SITE_URL}/#org` };

const logoRef = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/assets/img/logo.png`,
  width: 800,
  height: 600,
};

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress:   ADDRESS.streetAddress,
  addressLocality: ADDRESS.addressLocality,
  addressRegion:   ADDRESS.addressRegion,
  addressCountry:  ADDRESS.addressCountry,
};

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAMES,
  url: SITE_URL,
  logo: logoRef,
  image: `${SITE_URL}/banner.jpg`,
  description: SITE_DESCRIPTION,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: postalAddress,
  foundingDate: '2014',
  identifier: `RCCM ${RCCM}`,
  areaServed: { '@type': 'Country', name: 'Cameroon' },
});

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAMES,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo.png`,
  image: `${SITE_URL}/banner.jpg`,
  description: SITE_DESCRIPTION,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '$$',
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens:  '08:00',
    closes: '18:30',
  }],
  foundingDate: '2014',
  identifier: `RCCM ${RCCM}`,
  areaServed: { '@type': 'Country', name: 'Cameroon' },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAMES,
  url: SITE_URL,
  inLanguage: SITE_LANG,
  publisher: orgRef,
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    ...(it.url ? { item: it.url } : {}),
  })),
});

export const serviceSchema = ({ name, description, slug, image, serviceType }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/activites/${slug}#service`,
  name,
  description,
  serviceType: serviceType || name,
  provider: orgRef,
  areaServed: { '@type': 'Country', name: 'Cameroon' },
  url: `${SITE_URL}/activites/${slug}`,
  ...(image ? { image: absUrl(image) } : {}),
  ...(slug ? { mainEntityOfPage: `${SITE_URL}/activites/${slug}` } : {}),
});

export const newsArticleSchema = ({ slug, headline, description, datePublished, dateModified, image }) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline,
  description,
  datePublished,
  dateModified: dateModified || datePublished,
  inLanguage: SITE_LANG,
  image: image ? [absUrl(image)] : undefined,
  author: orgRef,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: logoRef,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/actualites/${slug}`,
  },
});

export const creativeWorkSchema = ({ slug, name, description, image, year, location }) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  description,
  creator: orgRef,
  url: `${SITE_URL}/realisations/${slug}`,
  ...(image ? { image: absUrl(image) } : {}),
  ...(year ? { dateCreated: String(year).slice(0, 4) } : {}),
  ...(location ? { contentLocation: { '@type': 'Place', name: location } } : {}),
});

export const itemListSchema = ({ name, items }) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: it.url,
    name: it.name,
  })),
});

// FAQPage — eligible for Google rich-results "People also ask" boxes
// when there are real Q&As specific to the page.
export const faqPageSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: it.a,
    },
  })),
});
