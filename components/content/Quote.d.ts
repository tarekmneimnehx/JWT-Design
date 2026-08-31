import * as React from 'react';

export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Person quoted. */
  author?: string;
  /** Their role / location. */
  role?: string;
  /** @default 'default' */
  tone?: 'default' | 'inverse';
  /** @default 'lg' */
  size?: 'md' | 'lg' | 'xl';
}

/** Italic serif pull-quote / testimonial. */
export function Quote(props: QuoteProps): JSX.Element;
