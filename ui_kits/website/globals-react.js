/* Provide React + ReactDOM as globals, exactly as the old CDN <script> tags did.
   This module is imported FIRST (before _ds_bundle.js and the screen scripts),
   so those files — which reference a global `React` and `ReactDOM` — keep working
   unchanged, now against the bundled PRODUCTION React 18 instead of the CDN dev
   build. */
import React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

window.React = React;
window.ReactDOM = Object.assign({}, ReactDOM, { createRoot });
