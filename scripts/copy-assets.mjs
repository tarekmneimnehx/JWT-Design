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

// The site references images as WebP, so we DON'T publish the source .jpg/.jpeg
// files — only the .webp (and, in video/, the .mp4). This roughly halves the
// published image weight.
const noJpeg = (src) => !/\.jpe?g$/i.test(src);

// Whole directories the site references.
const dirs = [
  'images',                    // project galleries (full-size, .webp)
  'thumbs',                    // project thumbnails / covers (.webp)
  'team',                      // founder portraits + together shots (.webp)
  'press',                     // press card image(s) (.webp)
  'video',                     // compressed hero videos (originals are in assets/_video_src, not copied)
  'projects/ronaldo-muchawar', // the only projects/* subfolder used (JWT_IMG decorative renders, .webp)
];
for (const d of dirs) {
  cpSync(join(assetsSrc, d), join(assetsOut, d), { recursive: true, filter: noJpeg });
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
