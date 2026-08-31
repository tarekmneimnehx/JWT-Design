import * as React from 'react';

interface BaseFieldProps {
  /** Uppercase mono label shown above the control. */
  label?: string;
  /** Boxed style instead of the default single underline. @default false */
  boxed?: boolean;
  className?: string;
}

export interface InputProps
  extends BaseFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {}

export interface TextareaProps
  extends BaseFieldProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {}

export interface SelectProps
  extends BaseFieldProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  children: React.ReactNode;
}

/** Underlined or boxed text input with uppercase mono label. */
export function Input(props: InputProps): JSX.Element;
/** Multi-line input matching Input. */
export function Textarea(props: TextareaProps): JSX.Element;
/** Brand-styled native select. */
export function Select(props: SelectProps): JSX.Element;
