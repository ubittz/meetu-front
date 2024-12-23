import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import Tab from '@@components/Tab';
import Typography from '@@components/Typography';
import ContentTabContent from '@@pages/MyClass/parts/ClassTabContent';
import { ACCOUNT_TYPE } from '@@pages/Profile/constants';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { MEETING_FILTER_TYPE } from '@@stores/meeting/constants';
import { useMeetingByUser } from '@@stores/meeting/hooks';
import { deleteMeetingFailure, deleteMeetingRequest, deleteMeetingSuccess } from '@@stores/meeting/reducer';
import { MeetingByUserQuery } from '@@stores/meeting/types';
import { useQueryParams } from '@@utils/request/hooks';

const TAB_LIST = [
  {
    title: '전체',
    value: '',
  },
  {
    title: '모임확정',
    value: MEETING_FILTER_TYPE.CONFIRMED_WAITING,
  },
  {
    title: '진행완료',
    value: MEETING_FILTER_TYPE.IN_PROGRESS,
  },
];

const initialQuery: MeetingByUserQuery = {
  page: 0,
};

function MyClass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountType = ACCOUNT_TYPE.HOST;

  const [deleteTargetId, setDeleteTargetId] = useState<string>();

  const { visible: deleteVisible, setVisible: setDeleteVisible } = useModal();
  const { visible, setVisible, content, setContent } = useModal();

  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ page }) => page === undefined,
  });

  const { content: meetingList, page, isLoading } = useMeetingByUser(query, query.page === undefined);

  const findedIndex = TAB_LIST.findIndex((tab) => tab.value === query.filterType);
  const selectedIndex = findedIndex === -1 ? 0 : findedIndex;

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleDelete = (id: string) => {
    setDeleteTargetId(id);
    setDeleteVisible(true);
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  const handleConfirmDelete = () => {
    setDeleteVisible(false);

    if (deleteTargetId) {
      dispatch(deleteMeetingRequest(deleteTargetId));
    }
  };

  const handleChangeTab = (selectedIndex: number) => {
    const filterType = TAB_LIST[selectedIndex].value;
    updateQuery('filterType', filterType);
  };

  useActionSubscribe({
    type: deleteMeetingSuccess.type,
    callback: () => {
      setContent('모임을 성공적으로 제거했습니다.');
      setVisible(true);
    },
  });

  useActionSubscribe({
    type: deleteMeetingFailure.type,
    callback: () => {
      setContent('모임 제거를 실패했습니다.');
      setVisible(true);
    },
  });

  return (
    <FullScreen>
      <Modal visible={deleteVisible} setVisible={setDeleteVisible} onConfirm={handleConfirmDelete}>
        정말 이 모임을 제거하시겠습니까?
      </Modal>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
      <Header onBack={handleClickBack}>
        <Typography.Main fontWeight={600}>내 모임</Typography.Main>
      </Header>
      <Flex.Vertical className='body tw-pb-[60px]' gap={20}>
        <Typography.Main className='tw-mx-[20px] tw-mt-[12px]' fontWeight={700} fontSize='20px'>
          총{' '}
          <Typography.Point fontWeight='inherit' fontSize='inherit' as='span'>
            {page.total}
          </Typography.Point>
          개
        </Typography.Main>
        <Tab itemList={TAB_LIST.map(({ title }) => title)} selectedIndex={selectedIndex} onChange={handleChangeTab} isLoading={isLoading}>
          <ContentTabContent meetingList={meetingList ?? []} onDelete={handleDelete} />
          <ContentTabContent meetingList={meetingList ?? []} onDelete={handleDelete} />
          <ContentTabContent meetingList={meetingList ?? []} onDelete={handleDelete} />
        </Tab>
      </Flex.Vertical>
      {accountType === ACCOUNT_TYPE.HOST && (
        <FooterContainer>
          <Button.Medium>모임 만들기</Button.Medium>
        </FooterContainer>
      )}
    </FullScreen>
  );
}

export default MyClass;
