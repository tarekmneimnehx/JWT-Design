import * as React from 'react';

export type ShareNetwork = 'facebook' | 'linkedin' | 'whatsapp' | 'link';

export interface ShareRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL to share. Defaults to the current location. */
  url?: string;
  /** Optional title prepended to the WhatsApp message. */
  title?: string;
  /** @default 'Share' */
  legend?: string;
  /** @default ['facebook','linkedin','whatsapp','link'] */
  networks?: ShareNetwork[];
}

/** Share row with social links and an inline copy-link confirmation. */
export function ShareRow(props: ShareRowProps): JSX.Element;
