/* JWT Design Studio — Press & News (editable list).
   Loaded before data.js as window.JWT_PRESS, then read into JWT_DATA.press.

   Each item:
   {
     type:    'article' | 'news',   // 'article' = external coverage to reshare;
                                     // 'news'    = the studio's own announcement
     title:   'Headline text',
     outlet:  'Publication name',    // for articles (e.g. "Architectural Digest ME")
     date:    '2024-09',             // 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD' — used to sort (newest first)
     url:     'https://…',           // link opened in a new tab (articles / source)
     image:   '../../assets/press/<file>.jpg',  // OPTIONAL thumbnail (put files in assets/press/)
     excerpt: 'One or two lines of summary.'     // OPTIONAL
   }

   To add coverage: append an object below. Newest items show first automatically. */
window.JWT_PRESS = [
  /* Example (delete or replace):
  {
    type: 'article',
    title: 'How two sisters are shaping calm, tailor-made interiors',
    outlet: 'Architectural Digest Middle East',
    date: '2024-09',
    url: 'https://example.com/jwt-feature',
    image: '',
    excerpt: 'A feature on JWT Design Studio’s end-to-end approach across the UAE, Lebanon and Syria.'
  },
  */
];
