import * as React from 'react';

export type ButtonVariant =
  | 'primary' | 'accent' | 'outline' | 'outline-inverse' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action for the JWT brand. Ink-filled by default; taupe `accent`
 * for warm emphasis, `outline` for secondary, `outline-inverse` over photography,
 * `link` for inline underlined actions.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Render as a link to this URL instead of a button. */
  href?: string;
  /** Uppercase, tracked label (luxury micro-CTA). @default false */
  uppercase?: boolean;
  /** Show a trailing arrow that nudges on hover. @default false */
  withArrow?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
