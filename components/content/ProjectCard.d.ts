import * as React from 'react';

/**
 * Project tile — image, tracked meta run and title.
 */
export interface ProjectCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  src: string;
  alt?: string;
  title: string;
  /** Discipline — 'Interiors' | 'Architectural' | 'Lighting'. */
  discipline?: string;
  /** Sector — e.g. 'Residential', 'Hospitality', 'Offices', 'Spa & Wellness'. */
  sector?: string;
  /** City / country. */
  region?: string;
  /** Completion year or 'In progress'. */
  year?: string | number;
  /** @deprecated use `region` */
  location?: string;
  /** @deprecated use `discipline` */
  category?: string;
  /** CSS aspect-ratio of the image. @default '16 / 9' */
  ratio?: string;
  /** Stamp the image as a 3D visualisation rather than a photograph. @default false */
  visualisation?: boolean;
  /** Optional overlay node, e.g. a <Badge>. */
  badge?: React.ReactNode;
  /** Show the "View project" affordance on hover. @default true */
  showView?: boolean;
  href?: string;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
