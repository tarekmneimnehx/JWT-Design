import * as React from 'react';

export interface AwardItem {
  /** e.g. 'Winner', 'Shortlisted'. */
  result: string;
  /** Project the award was given to. */
  project: string;
  /** Award / programme name. */
  award?: string;
  year?: string | number;
}

export interface AwardListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AwardItem[];
}

/** Awards & accolades hairline list. */
export function AwardList(props: AwardListProps): JSX.Element;
