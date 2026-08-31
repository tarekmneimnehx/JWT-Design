import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional centered uppercase label. */
  label?: string;
  /** Center the brand taupe dot. @default false */
  dot?: boolean;
  /** Use on dark sections. @default 'default' */
  tone?: 'default' | 'inverse';
}

/** Hairline rule, optionally with a centered dot or label. */
export function Divider(props: DividerProps): JSX.Element;
