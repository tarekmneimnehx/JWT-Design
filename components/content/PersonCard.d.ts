import * as React from 'react';

export interface PersonCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  src?: string;
  alt?: string;
  name: string;
  /** Job title, e.g. 'Partner'. */
  role?: string;
  /** Studio / discipline label above the name, e.g. 'Interiors | Dubai'. */
  studio?: string;
  href?: string;
}

/** Team member card — portrait desaturates until hover. */
export function PersonCard(props: PersonCardProps): JSX.Element;
