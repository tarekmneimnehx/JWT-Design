import * as React from 'react';

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Index label, e.g. "01". */
  index?: string;
  title: string;
  description?: string;
  /** Sub-deliverables shown as small pills. */
  items?: string[];
}

/** Service list item with index, serif title and description. */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
