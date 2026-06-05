// Generates dist/sitemap.xml after `vite build`.
// All URLs derived from the same data files used by the app — single source of truth.
//
// Run automatically via `npm run build` (see package.json).

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ACTIVITIES } from '../src/data/activities.js';
import { PROJECTS }   from '../src/data/projects.js';
import { NEWS }       from '../src/data/news.js';
import { SITE_URL }   from '../src/lib/seo.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: '/',              priority: '1.0', changefreq: 'weekly',  lastmod: today },
  { loc: '/realisations',  priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: '/actualites',    priority: '0.8', changefreq: 'weekly',  lastmod: NEWS[0]?.date || today },
  ...Object.values(ACTIVITIES).map((a) => ({
    loc: `/activites/${a.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: today,
  })),
  ...PROJECTS.map((p) => ({
    loc: `/realisations/${p.slug}`,
    priority: '0.6',
    changefreq: 'yearly',
    lastmod: today,
  })),
  ...NEWS.map((n) => ({
    loc: `/actualites/${n.slug}`,
    priority: '0.6',
    changefreq: 'yearly',
    lastmod: n.date,
  })),
];

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => [
    '  <url>',
    `    <loc>${escape(SITE_URL)}${escape(u.loc)}</loc>`,
    `    <lastmod>${u.lastmod}</lastmod>`,
    `    <changefreq>${u.changefreq}</changefreq>`,
    `    <priority>${u.priority}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, 'sitemap.xml'), xml, 'utf8');
console.log(`✓ sitemap.xml: ${urls.length} URLs written to dist/sitemap.xml`);
