import styled from 'styled-components';

import Button from '@@components/Button';
import ClassBox from '@@components/ClassBox';
import { ClassBoxProps } from '@@components/ClassBox/types';
import Flex from '@@components/Flex';
import { useAppState } from '@@store/hooks';

const StyledButtonContainer = styled(Flex.Horizontal)`
  margin-top: 8px;
  & > button {
    flex: 1;
  }
`;

function MyClassItem({ meeting, onDelete, ...props }: ClassBoxProps & { onDelete: (id: string) => void }) {
  const me = useAppState((state) => state.auth.me);

  const handleClickDelete = () => {
    if (meeting?.meetingId) {
      onDelete(meeting.meetingId);
    }
  };

  return (
    <ClassBox {...props} meeting={meeting}>
      {me?.isHost && (
        <StyledButtonContainer gap={12}>
          <Button.Tiny theme='outline'>수정하기</Button.Tiny>
          <Button.Tiny theme='secondary' onClick={handleClickDelete}>
            삭제
          </Button.Tiny>
        </StyledButtonContainer>
      )}
    </ClassBox>
  );
}

export default MyClassItem;
