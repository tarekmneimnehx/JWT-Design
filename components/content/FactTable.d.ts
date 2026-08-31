import * as React from 'react';

export interface FactRow {
  /** Uppercase label, e.g. 'Client'. */
  label: string;
  /** Value; arrays are joined with commas. Empty rows are skipped. */
  value?: React.ReactNode | string[] | null;
}

export interface FactTableProps extends React.HTMLAttributes<HTMLDListElement> {
  rows: FactRow[];
  /** Width of the label column. @default '11rem' */
  labelWidth?: string;
  /** Stack label above value instead of two columns. @default false */
  stacked?: boolean;
}

/** Hairline label / value credit table. */
export function FactTable(props: FactTableProps): JSX.Element;
