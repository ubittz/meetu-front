import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabHeader from '@@components/Tab/TabHeader';
import { COLORS } from '@@constants/colors';

const StyledTabContainer = styled.div<{ $itemCount: number; $selectedIndex: number }>`
  width: 100%;
  overflow: hidden;
  position: relative;

  & > .tab__container {
    width: calc(100% * ${({ $itemCount }) => $itemCount});
    margin-left: calc(100% * ${({ $selectedIndex }) => -$selectedIndex});
    transition: margin-left 0.2s;
  }
`;

const Loading = styled(Flex.Horizontal)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  .full_loading__indicator {
    width: 40px;
    height: 40px;
    border: 5px solid #fff;
    border-bottom-color: ${COLORS.MAIN};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Tab({
  itemList,
  selectedIndex,
  isLoading,
  onChange,
  children,
}: PropsWithChildren<{ itemList: string[]; selectedIndex: number; isLoading?: boolean; onChange?: (index: number) => void }>) {
  return (
    <Flex.Vertical>
      <TabHeader itemList={itemList} selectedIndex={selectedIndex} onChange={onChange} />
      <StyledTabContainer $itemCount={itemList.length} $selectedIndex={selectedIndex}>
        {isLoading && (
          <Loading alignItems='center' justifyContent='center'>
            <div className='full_loading__indicator' />
          </Loading>
        )}
        <Flex.Horizontal className='tab__container'>{children}</Flex.Horizontal>
      </StyledTabContainer>
    </Flex.Vertical>
  );
}

export default Tab;
