import { ReactNode } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledIcon = styled(Flex.Horizontal)`
  width: 52px;
  height: 52px;

  border-radius: 50%;
  background: #f8f8f8;
`;

function CategoryItem({ item }: { item: { title: string; icon: ReactNode } }) {
  return (
    <Flex.Vertical alignItems='center' flex='0 0 auto'>
      <StyledIcon justifyContent='center' alignItems='center'>
        {item.icon}
      </StyledIcon>
      <Typography.Sub fontSize='12px'>{item.title}</Typography.Sub>
    </Flex.Vertical>
  );
}

export default CategoryItem;
