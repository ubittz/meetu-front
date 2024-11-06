import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledPagination = styled(Flex.Horizontal)`
  height: 32px;

  .pagination__item {
    position: relative;
    width: 32px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.TEXT_300};

    &::before {
      content: '';
      display: none;
      position: absolute;
      left: 4px;
      bottom: 0;
      width: 24px;
      height: 2px;
      background: ${COLORS.TEXT_100};
    }

    &.selected {
      font-weight: 700;
      color: ${COLORS.TEXT_100};

      &::before {
        display: block;
      }
    }
  }
`;

function Pagination({ length, currentPage }: { length: number; currentPage: number }) {
  return (
    <StyledPagination justifyContent='center' gap={8}>
      {Array.from({ length: Math.min(length, 5) }).map((_, index) => (
        <Flex.Horizontal
          key={index}
          className={`pagination__item ${index + 1 === currentPage && 'selected'}`}
          alignItems='center'
          justifyContent='center'
        >
          {index + 1}
        </Flex.Horizontal>
      ))}
    </StyledPagination>
  );
}

export default Pagination;
