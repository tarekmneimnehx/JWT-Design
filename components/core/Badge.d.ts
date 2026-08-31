import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Color intent. @default 'neutral' */
  tone?: 'neutral' | 'accent' | 'ink' | 'outline';
}

/** Small uppercase status / meta label. */
export function Badge(props: BadgeProps): JSX.Element;
