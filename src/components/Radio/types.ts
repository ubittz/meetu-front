import { HTMLAttributes, InputHTMLAttributes, PropsWithChildren } from 'react';

export type RadioProps = PropsWithChildren<{ iconProps?: HTMLAttributes<HTMLDivElement> } & InputHTMLAttributes<HTMLInputElement>>;
