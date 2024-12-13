import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import Pagination from '@@components/Pagination';
import TabHeader from '@@components/Tab/TabHeader';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { createContactSchema } from '@@constants/schema';
import { TAB_LIST } from '@@pages/ClassDetail/constants';
import AskCard from '@@pages/ClassDetail/parts/AskCard';
import AskInput from '@@pages/ClassDetail/parts/AskInput';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useContactList } from '@@stores/meeting/hooks';
import { createContactFailure, createContactRequest } from '@@stores/meeting/reducer';
import { ContactAddDTO } from '@@stores/meeting/types';
import { useQueryParams } from '@@utils/request/hooks';

const StyledAsk = styled(Flex.Vertical)`
  .ask__title {
    padding-bottom: 12px;
    border-bottom: 1px solid ${COLORS.LINE_100};
  }
`;

function Ask({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const dispatch = useDispatch();

  const { id } = useParams();

  const initialContactValues: ContactAddDTO = {
    meetingId: id ?? '',
    description: '',
    secretStatus: false,
    contactAnswerStatus: false,
  };

  const {
    query: { contactPage },
  } = useQueryParams(
    { contactPage: 0 },
    {
      initialSearch: ({ contactPage }) => contactPage === undefined,
    }
  );

  const {
    content: contactList,
    page,
    mutate,
  } = useContactList({
    id: id ?? '',
    page: contactPage,
  });

  const { visible: successVisible, setVisible: setSuccessVisible } = useModal();
  const { visible: failureVisible, setVisible: setFailureVisible } = useModal();

  const handleSubmit = (form: ContactAddDTO) => {
    dispatch(createContactRequest(form));
  };

  const handleConfirmSuccess = () => {
    setSuccessVisible(false);
    mutate();
  };

  const handleConfirmFailure = () => {
    setFailureVisible(false);
  };

  useActionSubscribe({
    type: createContactFailure.type,
    callback: () => {
      setFailureVisible(true);
    },
  });

  return (
    <StyledAsk>
      <Modal visible={successVisible} setVisible={setSuccessVisible} onConfirm={handleConfirmSuccess}>
        문의 등록이 완료되었습니다.
      </Modal>
      <Modal visible={failureVisible} setVisible={setFailureVisible} onConfirm={handleConfirmFailure}>
        문의 등록을 실패했습니다.
      </Modal>
      <TabHeader itemList={TAB_LIST} selectedIndex={2} onChange={onChangeTab} />
      <Flex.Vertical className='tw-px-[20px] tw-pt-[30px]'>
        <Flex.Vertical className='ask__title' gap={20}>
          <Typography.Sub fontSize='14px' fontWeight={700}>
            Meet new People 문의 (e)
          </Typography.Sub>
          <Formik initialValues={initialContactValues} onSubmit={handleSubmit} validationSchema={createContactSchema}>
            <AskInput setSuccessVisible={setSuccessVisible} />
          </Formik>
        </Flex.Vertical>
        <Flex.Vertical gap={40}>
          <Flex.Vertical>
            {contactList && contactList.length ? (
              contactList.map((contact) => <AskCard key={contact.no} contact={contact} />)
            ) : (
              <ClassEmpty>아직 문의가 없습니다.</ClassEmpty>
            )}
          </Flex.Vertical>
          <Pagination current={page.current} lastPage={page.lastPage} pageKey='contactPage' replace />
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledAsk>
  );
}

export default Ask;
