import * as React from 'react';

export interface HeroSlide {
  src: string;
  /** Large display title, bottom-left. */
  title: string;
  /** Uppercase meta items along the bottom-right (studio, discipline, sector, room). */
  meta?: string[];
  /** Route passed to `onSelect` when the CTA is pressed. */
  href?: string;
  /** Rest centred and inset over the project's main frame instead of full bleed.
   *  Leave false on each project's first slide. */
  inset?: boolean;
}

/**
 * Full-viewport project stage — scrolling grows the next frame in from an inset
 * panel to full bleed while the title, CTA and meta row stay pinned.
 */
export interface HeroShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: HeroSlide[];
  /** Called with a slide's `href` when the CTA is pressed. */
  onSelect?: (href: string) => void;
  /** CTA label. @default 'View project' */
  cta?: string;
  /** Resting inset of `inset` frames, in % — applied equally on both axes so the
   *  frame keeps the stage's aspect ratio. @default 12 */
  rest?: number;
  /** Extra inset the incoming frame eases in from, in %. @default 7 */
  edge?: number;
}

export function HeroShowcase(props: HeroShowcaseProps): JSX.Element;
