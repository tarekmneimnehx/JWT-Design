import { defineConfig } from 'vite';

/* The site's screen/data scripts (ui_kits/website/*.jsx, *.js) are plain scripts
   that attach to window and rely on load ORDER, exactly like the original
   index.html did. We preserve that by importing them for their side effects in
   order from main.jsx, with a classic JSX transform (React.createElement) so the
   existing global-`React` code keeps working — no rewrite of those files. */
export default defineConfig({
  root: 'ui_kits/website',
  base: '/',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 4000,
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
