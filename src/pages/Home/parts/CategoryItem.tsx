import { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledIcon = styled(Flex.Horizontal)`
  width: 52px;
  height: 52px;

  border-radius: 50%;
  background: #f8f8f8;
`;

function CategoryItem({ item }: { item: { id: number; title: string; icon: ReactNode } }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(PAGES.HOME, `/category/${item.id}`));
  };

  return (
    <Flex.Vertical alignItems='center' flex='0 0 auto' onClick={handleClick}>
      <StyledIcon justifyContent='center' alignItems='center'>
        {item.icon}
      </StyledIcon>
      <Typography.Sub fontSize='12px'>{item.title}</Typography.Sub>
    </Flex.Vertical>
  );
}

export default CategoryItem;
