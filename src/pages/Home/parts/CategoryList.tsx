import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import {
  ArtCategoryIcon,
  BookCategoryIcon,
  CookCategoryIcon,
  CycleCategoryIcon,
  ExerciseCategoryIcon,
  MountainCategoryIcon,
  MusicCategoryIcon,
  PictureCategoryIcon,
  TechCategoryIcon,
  WineCategoryIcon,
  AllCategoryIcon,
} from '@@pages/Home/icons';
import CategoryItem from '@@pages/Home/parts/CategoryItem';

const StyledCategoryList = styled(Flex.Horizontal)`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CATEGORY_LIST = [
  {
    icon: <ArtCategoryIcon />,
    title: '아트',
  },
  {
    icon: <BookCategoryIcon />,
    title: '독서',
  },
  {
    icon: <CookCategoryIcon />,
    title: '쿠킹',
  },
  {
    icon: <CycleCategoryIcon />,
    title: '사이클',
  },
  {
    icon: <ExerciseCategoryIcon />,
    title: '운동',
  },
  {
    icon: <MountainCategoryIcon />,
    title: '등산',
  },
  {
    icon: <MusicCategoryIcon />,
    title: '음악',
  },
  {
    icon: <PictureCategoryIcon />,
    title: '사진',
  },
  {
    icon: <TechCategoryIcon />,
    title: '기술',
  },
  {
    icon: <WineCategoryIcon />,
    title: '와인',
  },
  {
    icon: <AllCategoryIcon />,
    title: '모두보기',
  },
];

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
