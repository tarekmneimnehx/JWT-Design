import * as React from 'react';

export interface FooterLink { label: string; href: string; }
export interface FooterColumn {
  title: string;
  /** Plain labels or {label, href} objects. */
  links: (string | FooterLink)[];
}
export interface FooterSocial { label: string; href: string; }

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logoSrc?: string;
  brand?: string;
  /** Italic serif tagline. */
  tagline?: string;
  /** Defaults to Expertise / Sectors / Studio columns. */
  columns?: FooterColumn[];
  email?: string;
  location?: string;
  social?: FooterSocial[];
  /** Intercept in-page (#…) link clicks for client-side routing. */
  onNavigate?: (href: string) => void;
}

/** Dark site footer with brand lockup, link columns and social row. */
export function Footer(props: FooterProps): JSX.Element;
