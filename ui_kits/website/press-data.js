/* JWT Design Studio — Press & News (editable list).
   Loaded before data.js as window.JWT_PRESS, then read into JWT_DATA.press.

   Each item:
   {
     type:    'article' | 'news',   // 'article' = external coverage to reshare;
                                     // 'news'    = the studio's own announcement
     title:   'Headline text',
     outlet:  'Publication name',    // for articles (e.g. "Gulf Magazine")
     date:    '2024-09',             // 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD' — used to sort (newest first)
     url:     'https://…',           // link opened in a new tab (articles / source)
     image:   '../../assets/press/<file>.jpg',  // OPTIONAL thumbnail (put files in assets/press/)
     excerpt: 'One or two lines of summary.'     // OPTIONAL
   }

   To add coverage: append an object below. Newest items show first automatically
   (add a `date` to control the order; items without a date keep the order below). */
window.JWT_PRESS = [
  {
    type: 'article',
    title: 'Jinan & Joelle Touma: “Together, we are better”',
    outlet: 'Zahrat Al Khaleej',
    date: '',
    url: 'https://www.zahratalkhaleej.ae/article/4290594/جنان-وجويل-توما--نحن-معا-أفضل',
  },
  {
    type: 'article',
    title: 'Jinan Touma is creating spaces with identity',
    outlet: 'Gulf Magazine',
    date: '',
    url: 'https://gulfmagazine.co/jinan-touma-is-creating-spaces-with-identity/',
  },
  {
    type: 'article',
    title: 'Joelle Touma is building a bold new vision',
    outlet: 'Gulf Magazine',
    date: '',
    url: 'https://gulfmagazine.co/joelle-touma-is-building-a-bold-new-vision-for/',
  },
  {
    type: 'article',
    title: 'JWT Design Studio, featured in Sayidaty',
    outlet: 'Sayidaty Magazine',
    date: '',
    url: 'https://magazine.sayidaty.net/books/dqqx/#p=84',
  },
];
