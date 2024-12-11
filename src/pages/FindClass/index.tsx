import { ChangeEventHandler, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { COLORS } from '@@constants/colors';
import { ALL_CATEGORIES, CATEGORY, CATEGORY_STRINGS, CLASS_LIST } from '@@pages/Home/constants';
import { Category } from '@@pages/Home/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const FILTER_OPTIONS = [
  {
    value: 'recent',
    label: '최신순으로 보기',
  },
  {
    value: 'recommend',
    label: '밋유 추천순',
  },
  {
    value: 'priceAsc',
    label: '가격 높은순',
  },
  {
    value: 'priceDesc',
    label: '가격 낮은순',
  },
];

const StyledHomeCategory = styled(FullScreen)`
  .body {
    padding: 12px 20px 60px;

    .class_list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 30px;
    }

    .category__filter {
      font-size: 12px;
      color: ${COLORS.TEXT_200};
    }
  }
`;

const StyledHeaderSelect = styled.select`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.TEXT_200};
  text-align: center;
  outline: none;
`;

const StyledSelect = styled.select`
  font-size: 12px;
  color: ${COLORS.TEXT_200};
  outline: none;
`;

function FindClass() {
  const navigate = useNavigate();

  const { category } = useParams<{ category: Category }>();

  const [selectedCategory, setSelectedCategory] = useState<Category>(category ?? CATEGORY.ALL);
  const [selectedFilter, setSelectedFilter] = useState<string>(FILTER_OPTIONS[0].value);

  const handleChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedCategory(e.target.value as Category);
    navigate(pathGenerator(PAGES.FIND_CLASS, `/${e.target.value}`), {
      replace: true,
    });
  };

  const handleChangeFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedFilter(e.target.value);
  };

  if (!category) {
    return <Navigate to={pathGenerator(PAGES.FIND_CLASS, `/${CATEGORY.ALL}`)} replace />;
  }

  return (
    <StyledHomeCategory navigation>
      <Header hiddenBack>
        <StyledHeaderSelect value={selectedCategory} defaultValue={selectedCategory} onChange={handleChangeCategory}>
          {ALL_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {CATEGORY_STRINGS[category]}
            </option>
          ))}
        </StyledHeaderSelect>
      </Header>
      <Flex.Vertical className='body' gap={22}>
        <Flex.Horizontal justifyContent='flex-end'>
          <StyledSelect value={selectedFilter} onChange={handleChangeFilter}>
            {FILTER_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </StyledSelect>
        </Flex.Horizontal>
        <div className='class_list'>
          {CLASS_LIST.concat(CLASS_LIST).map((classItem, index) => (
            <ClassBox key={index} classItem={classItem} />
          ))}
        </div>
      </Flex.Vertical>
    </StyledHomeCategory>
  );
}

export default FindClass;
