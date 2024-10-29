import { Properties } from 'csstype';
import styled from 'styled-components';

import { FlexDirection, FlexProps } from '@@components/Flex/types';

const StyledBaseFlex = styled.div<{
  $direction: FlexDirection;
  $gap?: number;
  $alignItems: Properties['alignItems'];
  $justifyContent: Properties['justifyContent'];
}>`
  display: flex;
  flex-direction: ${({ theme, $direction }) => theme.flex.direction[$direction]};
  ${({ $gap }) => `gap: ${$gap}px;`}
  ${({ $alignItems }) => `align-items: ${$alignItems};`}
  ${({ $justifyContent }) => `justify-content: ${$justifyContent};`}
`;

const BaseFlex =
  (direction: FlexDirection) =>
  ({ gap, alignItems, justifyContent, ...props }: FlexProps) => {
    return <StyledBaseFlex {...props} $gap={gap} $alignItems={alignItems} $justifyContent={justifyContent} $direction={direction} />;
  };

export default BaseFlex;
