import * as React from 'react';

/**
 * Before / after image comparison slider — drag to wipe between a render and the
 * built room. Also known as a before-after slider or image reveal slider.
 */
export interface CompareSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left-hand image, shown as the handle moves right. */
  before: string;
  /** Right-hand image, revealed as the handle moves left. */
  after: string;
  /** Corner label for the before image. @default 'Render' */
  beforeLabel?: string;
  /** Corner label for the after image. @default 'Built' */
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** Starting handle position, 0–100. @default 50 */
  start?: number;
  /** Aspect ratio. @default '16 / 9' */
  ratio?: string;
  /** Explicit height (e.g. '100vh') — overrides `ratio` for a full-screen hero. */
  height?: string;
  /** Inset the after-label from the right, clearing a fixed corner button (e.g. 'var(--fab-safe)'). */
  safeRight?: string;
  /** Overlay chrome rendered above the images (title, meta, CTA). */
  children?: React.ReactNode;
}

export function CompareSlider(props: CompareSliderProps): JSX.Element;
