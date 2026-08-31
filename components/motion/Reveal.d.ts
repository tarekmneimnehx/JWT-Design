import * as React from 'react';

export interface UseInViewOptions {
  /** @default 0.12 */
  threshold?: number;
  /** @default '0px 0px -8% 0px' */
  rootMargin?: string;
  /** Stop observing after the first entry. @default true */
  once?: boolean;
}

/**
 * Returns [ref, inView] — attach ref to the element you want to observe.
 *
 * NOTE: lowercase exports are NOT placed on `window.<Namespace>`. Inside this
 * design system, import it by relative path from a sibling component. From a
 * consuming project, use the `InView` render-prop component instead.
 */
export function useInView(
  options?: UseInViewOptions
): [React.RefObject<any>, boolean];

export interface InViewProps extends UseInViewOptions {
  /** Render prop — receives `{ ref, inView }`. */
  children: (state: { ref: React.RefObject<any>; inView: boolean }) => React.ReactNode;
}

/** Namespace-safe render-prop access to the in-view hook. */
export function InView(props: InViewProps): JSX.Element | null;

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Stagger delay in ms. @default 0 */
  delay?: number;
  /** Travel distance in px. @default 26 */
  rise?: number;
  /** Element to render. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
}

/** Fades and rises content into view once on scroll. */
export function Reveal(props: RevealProps): JSX.Element;

export interface RevealImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A single <img> or media element. */
  children: React.ReactNode;
  /** Stagger delay in ms. @default 0 */
  delay?: number;
}

/** Clipping frame that settles a photograph from a slight over-scale. */
export function RevealImage(props: RevealImageProps): JSX.Element;
