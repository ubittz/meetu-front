import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { CATEGORY_ICONS, CATEGORY_STRINGS } from '@@pages/Home/constants';
import { Category } from '@@pages/Home/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledIcon = styled(Flex.Horizontal)`
  width: 52px;
  height: 52px;

  border-radius: 50%;
  background: #f8f8f8;
`;

function CategoryItem({ category }: { category: Category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(PAGES.FIND_CLASS, `/${category}`));
  };

  return (
    <Flex.Vertical alignItems='center' flex='0 0 auto' onClick={handleClick}>
      <StyledIcon justifyContent='center' alignItems='center'>
        {CATEGORY_ICONS[category]}
      </StyledIcon>
      <Typography.Sub fontSize='12px'>{CATEGORY_STRINGS[category]}</Typography.Sub>
    </Flex.Vertical>
  );
}

export default CategoryItem;
