import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_DESCRIPTION,
  OG_IMAGE,
  OG_IMAGE_ALT,
  absUrl,
  pageTitle,
} from '../lib/seo.js';

export default function Seo({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
  image,
  imageAlt,
  type = 'website',
  jsonld = [],
  noindex = false,
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = pageTitle(title);
  const canonical = absUrl(path);
  const ogImage = image ? absUrl(image) : OG_IMAGE;
  const ogImageAlt = imageAlt || (title ? `${title} — ${SITE_NAME}` : OG_IMAGE_ALT);

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex
        ? <meta name="robots" content="noindex,nofollow" />
        : <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      }

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured data — one <script> per schema for cleaner validation */}
      {jsonld.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
}
