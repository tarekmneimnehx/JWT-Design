import * as React from 'react';

export interface WhatsAppButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Phone number in international form; non-digits are stripped. */
  phone: string | number;
  /** Accessible name and hover tooltip. The button is icon-only so its footprint
   *  stays a known constant (see --fab-size / --fab-safe). @default 'WhatsApp us' */
  label?: string;
  /** Prefilled message text. */
  message?: string;
}

/** Fixed-position WhatsApp enquiry button — the default contact route in the UAE. */
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
