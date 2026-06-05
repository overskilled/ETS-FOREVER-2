// Build-time prerender: renders every known route through the SSR bundle
// and writes a real per-route HTML file with route-specific meta + JSON-LD
// baked into <head>. Non-JS crawlers (WhatsApp / Facebook / LinkedIn /
// older bots) see correct content for every route, not just the homepage.
//
// Runs after `vite build` (client) and `vite build --ssr` — see package.json.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { ACTIVITIES } from '../src/data/activities.js';
import { PROJECTS }   from '../src/data/projects.js';
import { NEWS }       from '../src/data/news.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT     = path.resolve(__dirname, '..');
const DIST     = path.join(ROOT, 'dist');
const SSR_DIST = path.join(ROOT, 'dist-ssr');

const ROUTES = [
  '/',
  '/realisations',
  '/actualites',
  ...Object.keys(ACTIVITIES).map((s) => `/activites/${s}`),
  ...PROJECTS.map((p) => `/realisations/${p.slug}`),
  ...NEWS.map((n) => `/actualites/${n.slug}`),
];

const TEMPLATE = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// Dynamic import of the SSR bundle (Node ESM needs a file:// URL).
const ssrPath = pathToFileURL(path.join(SSR_DIST, 'entry-server.js')).href;
const { render } = await import(ssrPath);

const HEAD_RE = /<!--\s*SSR_HEAD_START[\s\S]*?SSR_HEAD_END\s*-->/;
const BODY_RE = /<!--\s*SSR_BODY\s*-->/;

let written = 0;
for (const url of ROUTES) {
  const { html: appHtml, helmet } = render(url);

  // With `prioritizeSeoTags`, react-helmet-async splits priority SEO tags
  // (title, canonical, description, robots, og:*, etc.) into a separate
  // `priority` field. Without it, those tags would be dropped from the
  // serialised <head>. Order matters: priority first, then the rest.
  const headParts = helmet
    ? [
        helmet.priority?.toString?.(),
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].filter(Boolean).join('\n')
    : '';

  const finalHtml = TEMPLATE
    .replace(HEAD_RE, headParts)
    .replace(BODY_RE, appHtml);

  const outDir = url === '/'
    ? DIST
    : path.join(DIST, ...url.split('/').filter(Boolean));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), finalHtml, 'utf8');
  written++;
}

// Strip the SSR bundle from dist-ssr now that prerender is done — it's
// not shipped to nginx.
fs.rmSync(SSR_DIST, { recursive: true, force: true });

console.log(`✓ prerender: ${written} routes → dist/<route>/index.html`);
