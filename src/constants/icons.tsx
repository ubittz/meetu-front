import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function ArrowLeftIcon({ white = false, ...props }: { white?: boolean } & DefaultIconProps) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_339_997' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='1' y='0' width='18' height='18'>
        <rect x='1.66675' y='0.833252' width='17.1429' height='17.1429' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_339_997)'></g>
      <mask id='mask1_339_997' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='5' y='0' width='10' height='19'>
        <rect width='8.38095' height='18.8571' transform='matrix(-1 0 0 1 14.1667 0)' fill='black' />
      </mask>
      <g mask='url(#mask1_339_997)'>
        <rect
          width='1.57143'
          height='10.0884'
          rx='0.785715'
          transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 14.1667 3.2063)'
          fill={white ? '#fff' : '#212121'}
        />
        <rect
          x='5.78589'
          y='9.46729'
          width='1.57143'
          height='10.0884'
          rx='0.785715'
          transform='rotate(-45 5.78589 9.46729)'
          fill={white ? '#fff' : '#212121'}
        />
      </g>
    </svg>
  );
}

export function TermsRightArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_206_3592' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='17'>
        <rect width='16' height='16' transform='matrix(-1 0 0 1 16 0.5)' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_206_3592)'></g>
      <g clipPath='url(#clip0_206_3592)'>
        <mask id='mask1_206_3592' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='5' y='1' width='7' height='15'>
          <rect x='5.01587' y='1.35711' width='6.34921' height='14.2857' fill='black' />
        </mask>
        <g mask='url(#mask1_206_3592)'>
          <rect x='5.01587' y='3.78622' width='1.19048' height='7.64277' transform='rotate(-45 5.01587 3.78622)' fill='#BBBBBB' />
          <rect width='1.19048' height='7.64277' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 11.3651 8.52922)' fill='#BBBBBB' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_206_3592'>
          <rect width='13.3333' height='13.3333' fill='white' transform='matrix(-1 0 0 1 14.6666 1.8333)' />
        </clipPath>
      </defs>
    </svg>
  );
}
