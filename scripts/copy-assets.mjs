/* Copy ONLY the assets the website actually references into dist/assets/.
   Run after `vite build` (see package.json "build"). Everything not listed here
   — the questionnaire .xlsx, notes, review pages, uploads/, design-system pages,
   unused logos, and the original (pre-compressed) hero videos in assets/_video_src/
   — is intentionally NOT published. */
import { cpSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();                 // repo root (Netlify runs the build here)
const assetsSrc = join(root, 'assets');
const assetsOut = join(root, 'dist', 'assets');

mkdirSync(assetsOut, { recursive: true });

// Whole directories the site references.
const dirs = [
  'images',                    // project galleries (full-size)
  'thumbs',                    // project thumbnails / covers
  'team',                      // founder portraits + together shots
  'press',                     // press card image(s)
  'video',                     // compressed hero videos (originals are in assets/_video_src, not copied)
  'projects/ronaldo-muchawar', // the only projects/* subfolder used (JWT_IMG decorative renders)
];
for (const d of dirs) {
  cpSync(join(assetsSrc, d), join(assetsOut, d), { recursive: true });
}

// Individual root files the site references (favicons + the two logos in use).
const files = [
  'favicon.ico', 'favicon-16.png', 'favicon-32.png', 'apple-touch-icon.png',
  'logo-white.svg', 'logo-charcoal.svg',
];
for (const f of files) {
  cpSync(join(assetsSrc, f), join(assetsOut, f));
}

console.log('copy-assets: copied', dirs.length, 'dirs and', files.length, 'files into dist/assets/');
