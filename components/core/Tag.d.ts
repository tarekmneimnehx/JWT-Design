import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Selected state (filled ink). @default false */
  active?: boolean;
  /** Soft filled background instead of outline. @default false */
  solid?: boolean;
  /** Optional trailing count, e.g. project totals per category. */
  count?: number;
}

/** Category / filter pill, static or interactive. */
export function Tag(props: TagProps): JSX.Element;
