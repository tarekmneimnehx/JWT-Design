import * as React from 'react';

export interface MetaListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ordered meta values, e.g. ['Interiors', 'Hospitality', 'Dubai', '2024']. */
  items: (string | number | null | undefined)[];
  /** Use on teal grounds. @default 'default' */
  tone?: 'default' | 'inverse';
  /** @default 'sm' */
  size?: 'sm' | 'lg';
  /** Accent the first item (the discipline). @default true */
  accentFirst?: boolean;
  /** Character between items. @default '/' */
  separator?: string;
}

/** Tracked uppercase meta run: discipline / sector / region / year. */
export function MetaList(props: MetaListProps): JSX.Element;
