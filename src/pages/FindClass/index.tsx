import { ChangeEventHandler, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { COLORS } from '@@constants/colors';
import { ALL_CATEGORIES, CATEGORY_STRINGS } from '@@pages/Home/constants';
import { useMeetingListByFilter } from '@@pages/Home/hooks';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { Category } from '@@pages/Home/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { ALL_FIND_CLASS_ORDER, FIND_CLASS_ORDER, FIND_CLASS_ORDER_STRING, QUERY_BY_FIND_CLASS_ORDER } from './constants';
import { FindClassOrder } from './types';

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

  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(category);
  const [selectedOrder, setSelectedOrder] = useState<FindClassOrder>(FIND_CLASS_ORDER.RECENT);

  const { content } = useMeetingListByFilter({ page: 0, category, ...QUERY_BY_FIND_CLASS_ORDER[selectedOrder] });

  const handleChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedCategory(e.target.value as Category);
    navigate(pathGenerator(PAGES.FIND_CLASS, `/${e.target.value}`), {
      replace: true,
    });
  };

  const handleChangeFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOrder(e.target.value as FindClassOrder);
  };

  if (category && !ALL_CATEGORIES.includes(category)) {
    return <Navigate to={pathGenerator(PAGES.FIND_CLASS)} replace />;
  }

  return (
    <StyledHomeCategory navigation>
      <Header hiddenBack>
        <StyledHeaderSelect value={selectedCategory} defaultValue={selectedCategory} onChange={handleChangeCategory}>
          <option value=''>모두보기</option>
          {ALL_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {CATEGORY_STRINGS[category]}
            </option>
          ))}
        </StyledHeaderSelect>
      </Header>
      <Flex.Vertical className='body' gap={22}>
        <Flex.Horizontal justifyContent='flex-end'>
          <StyledSelect value={selectedOrder} onChange={handleChangeFilter}>
            {ALL_FIND_CLASS_ORDER.map((order) => (
              <option key={order} value={order}>
                {FIND_CLASS_ORDER_STRING[order]}
              </option>
            ))}
          </StyledSelect>
        </Flex.Horizontal>
        <div className='class_list'>
          {content && content.length ? content?.map((meeting) => <ClassBox key={meeting.meetingId} meeting={meeting} />) : <ClassEmpty></ClassEmpty>}
        </div>
      </Flex.Vertical>
    </StyledHomeCategory>
  );
}

export default FindClass;
