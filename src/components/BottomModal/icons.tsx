import { DefaultIconProps } from '@@types/common';

export function ModalLeftArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_206_3813' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='2' y='1' width='21' height='21'>
        <rect x='2' y='1.00001' width='20.5714' height='20.5714' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_206_3813)'></g>
      <mask id='mask1_206_3813' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='6' y='0' width='11' height='23'>
        <rect width='10.0571' height='22.6286' transform='matrix(-1 0 0 1 17 0)' fill='black' />
      </mask>
      <g mask='url(#mask1_206_3813)'>
        <rect width='1.88572' height='12.1061' rx='0.942858' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 17 3.84771)' fill='#212121' />
        <rect x='6.94287' y='11.3606' width='1.88572' height='12.1061' rx='0.942858' transform='rotate(-45 6.94287 11.3606)' fill='#212121' />
      </g>
    </svg>
  );
}
