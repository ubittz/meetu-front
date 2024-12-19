import { Pagination as MUIPagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FlexProps } from '@@components/Flex/types';
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

function Pagination({
  current,
  lastPage,
  pageKey = 'page',
  replace = false,
  onChange,
  ...props
}: { current: number; lastPage: number; pageKey?: string; replace?: boolean; onChange?: (value: number) => void } & Omit<FlexProps, 'onChange'>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: number) => {
    searchParams.set(pageKey, String(value - 1));
    setSearchParams(searchParams, { replace: replace });
  };

  return (
    <StyledPagination justifyContent='center' gap={8} {...props}>
      <MUIPagination
        hideNextButton
        hidePrevButton
        count={lastPage}
        page={current + 1}
        onChange={(_, value) => {
          if (onChange) {
            onChange(value);
          } else {
            handleChange(value);
          }
        }}
      />
    </StyledPagination>
  );
}

export default Pagination;
