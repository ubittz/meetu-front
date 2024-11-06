import { DefaultIconProps } from '@@types/common';

export function DownArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M8.81171 1.40793C9.06276 1.65201 8.99999 2.00003 8.81176 2.06693L4.95458 5.81696C4.70352 6.06105 4.29655 6.06105 4.04549 5.81696L0.188337 2.06693C-0.0627203 1.82284 -1.20271e-08 1.5 0.0846538 1.40789C0.335711 1.16381 0.636497 1.16386 0.887554 1.40794L4.50004 5.00003L8.00004 1.50003C8.25109 1.25594 8.56066 1.16384 8.81171 1.40793Z'
        fill='#555555'
      />
    </svg>
  );
}
