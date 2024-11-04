import { useRef, useState } from 'react';

import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

export default function Wheel({
  initIdx,
  length,
  setValue,
  onChangeIndex,
}: {
  initIdx?: number;
  length?: number;
  setValue?: (index: number) => string;
  onChangeIndex?: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(initIdx ?? 0);

  const options = useRef<KeenSliderOptions>({
    slides: {
      number: length,
    },
    vertical: true,
    initial: initIdx || 0,
    mode: 'free-snap',
    detailsChanged: (s) => {
      const { abs, slides } = s.track.details;
      const index = slides.findIndex((slide) => slide.abs === abs);
      onChangeIndex?.(index);
      setCurrentIndex(index);
    },
  });

  const [sliderRef] = useKeenSlider<HTMLDivElement>(options.current);

  return (
    <Flex.Vertical className='wheel'>
      <div className='wheel_top' />
      <div className='keen-slider wheel_inner' ref={sliderRef}>
        {Array.from({ length: length ?? 0 }).map((_, index) => {
          const value = setValue ? setValue(index) : index + 1;

          return (
            <Flex.Horizontal key={index} className='keen-slider__slide' alignItems='center' justifyContent='flex-end'>
              {currentIndex === index ? <Typography.Main fontWeight={700}>{value}</Typography.Main> : <Typography.Sub>{value}</Typography.Sub>}
            </Flex.Horizontal>
          );
        })}
      </div>
      <div className='wheel_bottom' />
    </Flex.Vertical>
  );
}
