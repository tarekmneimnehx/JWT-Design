import * as React from 'react';

export interface CarouselSlide {
  src: string;
  alt?: string;
  /** Italic caption shown beneath, e.g. 'Suite Living'. */
  caption?: string;
}

/**
 * Captioned image carousel with an "n / N" counter.
 */
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: CarouselSlide[];
  /** CSS aspect-ratio of the viewport. @default '16 / 10' */
  ratio?: string;
  /** Wrap around at the ends. @default true */
  loop?: boolean;
  /** Show the dash indicators. @default true */
  showDots?: boolean;
}

export function Carousel(props: CarouselProps): JSX.Element;
