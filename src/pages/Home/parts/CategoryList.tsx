import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { CATEGORY_LIST } from '@@pages/Home/constants';
import CategoryItem from '@@pages/Home/parts/CategoryItem';

const StyledCategoryList = styled(Flex.Horizontal)`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function CategoryList() {
  return (
    <Flex.Vertical gap={12}>
      <Typography.Main fontSize='20px' fontWeight={700} className='tw-px-[20px]'>
        카테고리
      </Typography.Main>
      <StyledCategoryList gap={16} className='tw-px-[20px]'>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.title} item={category} />
        ))}
      </StyledCategoryList>
    </Flex.Vertical>
  );
}

export default CategoryList;
