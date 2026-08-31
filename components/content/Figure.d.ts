import * as React from 'react';

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  /** CSS aspect-ratio string. @default '4 / 3' */
  ratio?: string;
  /** Corner radius. @default 'md' */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** Subtle zoom on hover. @default false */
  zoom?: boolean;
  /** Drop the soft image shadow. @default false */
  shadow?: boolean;
  /** Caption text under the frame. */
  caption?: React.ReactNode;
  /** Right-aligned mono meta (location, year). */
  meta?: React.ReactNode;
}

/** Photography frame — consistent ratio, radius, optional caption. */
export function Figure(props: FigureProps): JSX.Element;
