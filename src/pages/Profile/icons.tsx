import { DefaultIconProps } from '@@types/common';

export function ProfileReviewDownArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_281_7250)'>
        <mask id='mask0_281_7250' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='-1' y='4' width='16' height='7'>
          <rect x='14.1426' y='4.0166' width='6.34921' height='14.2857' transform='rotate(90 14.1426 4.0166)' fill='black' />
        </mask>
        <g mask='url(#mask0_281_7250)'>
          <rect x='11.7134' y='4.0166' width='1.19048' height='7.64277' transform='rotate(45 11.7134 4.0166)' fill='white' />
          <rect width='1.19048' height='7.64277' transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 6.97021 10.3662)' fill='white' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_281_7250'>
          <rect width='13.3333' height='13.3333' fill='white' transform='matrix(0 -1 -1 0 13.6665 13.667)' />
        </clipPath>
      </defs>
    </svg>
  );
}
