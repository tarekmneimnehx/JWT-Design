import * as React from 'react';

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "10" or "84". */
  value: React.ReactNode;
  /** Uppercase label beneath. */
  label: string;
  /** Optional accent suffix in taupe, e.g. "+" or "yrs". */
  suffix?: string;
  /** @default 'start' */
  align?: 'start' | 'center';
  /** Use on dark sections. @default 'default' */
  tone?: 'default' | 'inverse';
}

/** Serif statistic with tracked label. */
export function StatBlock(props: StatBlockProps): JSX.Element;
