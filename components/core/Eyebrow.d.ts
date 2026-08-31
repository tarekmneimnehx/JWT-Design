import * as React from 'react';

/**
 * Tracked mono eyebrow label — the JWT section-intro device.
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Prefix the brand taupe dot. @default false */
  dot?: boolean;
  /** Text color intent. @default 'accent' */
  tone?: 'accent' | 'muted' | 'ink' | 'inverse';
  /** Element to render. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
