import { ForwardedRef, forwardRef } from 'react';

import { Properties } from 'csstype';
import styled from 'styled-components';

import { FlexDirection, FlexProps } from '@@components/Flex/types';

const StyledBaseFlex = styled.div<{
  $direction: FlexDirection;
  $gap?: number;
  $alignItems?: Properties['alignItems'];
  $justifyContent?: Properties['justifyContent'];
  $flex?: Properties['flex'];
}>`
  display: flex;
  flex-direction: ${({ theme, $direction }) => theme.flex.direction[$direction]};
  ${({ $gap }) => $gap !== undefined && `gap: ${$gap}px;`}
  ${({ $alignItems }) => $alignItems !== undefined && `align-items: ${$alignItems};`}
  ${({ $justifyContent }) => $justifyContent !== undefined && `justify-content: ${$justifyContent};`}
  ${({ $flex }) => $flex !== undefined && `flex: ${$flex};`}
`;

const BaseFlex = (direction: FlexDirection) =>
  forwardRef(({ gap, alignItems, justifyContent, flex, ...props }: FlexProps, forwardRef) => {
    return (
      <StyledBaseFlex
        {...props}
        ref={forwardRef as ForwardedRef<HTMLDivElement>}
        $gap={gap}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $direction={direction}
        $flex={flex}
      />
    );
  });

export default BaseFlex;
