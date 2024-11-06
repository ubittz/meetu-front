import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

import TabBarItem from './TabBarItem';

const StyledTabHeader = styled(Flex.Horizontal)<{ $width: number; $left: number }>`
  position: relative;
  height: 40px;
  border-bottom: 1px solid ${COLORS.LINE_100};
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: ${({ $left }) => $left}px;
    top: 100%;
    height: 1px;
    width: ${({ $width }) => $width}px;
    background: ${COLORS.MAIN};
    transition:
      left 0.2s,
      width 0.2s;
  }
`;

function TabHeader({ itemList, selectedIndex, onChange }: { itemList: string[]; selectedIndex: number; onChange?: (index: number) => void }) {
  const headerRef = useRef<HTMLDivElement>(null);

  const [barPosition, setBarPosition] = useState({
    left: 20,
    width: 0,
  });

  useEffect(() => {
    const selectedItem = headerRef.current?.querySelector(`.tab_header__item.selected`) as HTMLElement | undefined;
    if (!selectedItem) return;

    setBarPosition({
      left: selectedItem.offsetLeft,
      width: selectedItem.offsetWidth,
    });
  }, [selectedIndex]);

  return (
    <StyledTabHeader ref={headerRef} $width={barPosition.width} $left={barPosition.left}>
      {itemList.map((item, index) => (
        <TabBarItem key={index} selected={selectedIndex === index} onClick={() => onChange?.(index)}>
          {item}
        </TabBarItem>
      ))}
    </StyledTabHeader>
  );
}

export default TabHeader;
