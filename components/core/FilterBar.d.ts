import * as React from 'react';

export interface FilterSelectProps {
  /** Uppercase label, e.g. 'Expertise'. */
  name: string;
  /** Currently selected value (or the all-label). */
  value?: string;
  /** Selectable values, excluding the all-option. */
  options: string[];
  /** Label for the reset option. @default 'All' */
  allLabel?: string;
  onChange?: (value: string) => void;
}

export interface FilterDefinition extends FilterSelectProps {}

/**
 * Projects filter rail — "Filter By" plus labelled dropdowns, result count and clear.
 */
export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'Filter By' */
  legend?: string;
  filters: FilterDefinition[];
  /** Number of results currently shown. */
  count?: number;
  /** Total available, for the "n of N" readout. */
  total?: number;
  onClear?: () => void;
}

/** One labelled dropdown. */
export function FilterSelect(props: FilterSelectProps): JSX.Element;
/** The full filter rail. */
export function FilterBar(props: FilterBarProps): JSX.Element;
