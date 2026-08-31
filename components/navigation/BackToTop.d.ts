import * as React from 'react';

export interface BackToTopProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Scroll distance in px before the button appears. @default 700 */
  showAfter?: number;
  /** Accessible label. @default 'Back to top' */
  label?: string;
}

/** Fixed circular back-to-top control. */
export function BackToTop(props: BackToTopProps): JSX.Element;
