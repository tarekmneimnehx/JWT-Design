import * as React from 'react';

export interface NavLink {
  label: string;
  href: string;
  /** Opens the Expertise mega panel instead of navigating. */
  panel?: boolean;
}

export interface NavPanelColumn {
  title: string;
  links: { label: string; href: string }[];
}

/**
 * Marketing site top navigation — brand lockup, links, Expertise mega panel and CTA.
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image URL. Falls back to a text wordmark with the brand dot. */
  logoSrc?: string;
  /** Alternate logo used once the sticky bar condenses onto cream (e.g. the charcoal lockup). */
  logoSrcCondensed?: string;
  /** @default 'JWT' */
  brand?: string;
  /** Defaults to Home / About / Expertise / Projects / Contact. */
  links?: NavLink[];
  /** Columns shown in the Expertise panel (disciplines + sectors). */
  panel?: NavPanelColumn[];
  /** href of the current page for the active underline. */
  activeHref?: string;
  /** `overlay` = transparent cream-on-hero; `solid` = bordered cream bar. @default 'solid' */
  variant?: 'overlay' | 'solid';
  /** Fix to the viewport and condense onto cream after 80px of scroll. @default false */
  sticky?: boolean;
  cta?: string;
  ctaHref?: string;
  /** Optional side-effect when the hamburger opens the built-in mobile menu. */
  onMenu?: () => void;
  /** Intercept link/brand/CTA clicks for client-side routing. */
  onNavigate?: (href: string) => void;
}

export function Navbar(props: NavbarProps): JSX.Element;
