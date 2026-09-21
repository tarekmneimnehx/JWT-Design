/* Production entry. Replaces the CDN <script> tags + text/babel scripts of the
   old index.html. Imports run in ORDER (React globals first, then the design-
   system bundle, then the data scripts, then the screen scripts) — the same
   order the old <script> tags used — before the app is mounted. */
import './globals-react.js';
import '../../styles.css';

import '../../_ds_bundle.js';

import './projects-data.js';
import './review-overrides.js';
import './press-data.js';
import './data.js';

import './kit-ui.jsx';
import './HomePage.jsx';
import './AboutPage.jsx';
import './ExpertisePage.jsx';
import './ProjectsPage.jsx';
import './ProjectPage.jsx';
import './ContactPage.jsx';
import './PressPage.jsx';

import { mountApp } from './app.jsx';

mountApp();
