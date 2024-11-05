import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function ArrowLeftIcon(props: DefaultIconProps) {
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
          fill='#212121'
        />
        <rect x='5.78589' y='9.46729' width='1.57143' height='10.0884' rx='0.785715' transform='rotate(-45 5.78589 9.46729)' fill='#212121' />
      </g>
    </svg>
  );
}
