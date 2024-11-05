import styled from 'styled-components';

const StyledSliderNavigation = styled.div`
  position: absolute;
  bottom: 18px;
  left: 18px;

  display: flex;
  justify-content: center;
  gap: 4px;

  .slider_dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;

    background: #ffffff80;

    &.slider_dot-active {
      width: 12px;
      background: #ffffff;
      transition: width 100ms;
    }
  }
`;

function SliderNavigation({ currentIndex, length }: { currentIndex: number; length: number }) {
  return (
    <StyledSliderNavigation className='slider_dots__wrap'>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className={`slider_dot ${currentIndex === index && 'slider_dot-active'}`} />
      ))}
    </StyledSliderNavigation>
  );
}

export default SliderNavigation;
