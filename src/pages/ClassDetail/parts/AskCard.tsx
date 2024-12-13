import { format } from 'date-fns';
import styled from 'styled-components';

import Badge from '@@components/Badge';
import { BADGE_THEME } from '@@components/Badge/constants';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SecretIcon } from '@@pages/ClassDetail/icons';
import { ContactResponse } from '@@stores/meeting/types';

const StyledAskCard = styled(Flex.Vertical)`
  padding: 20px 0;
  border-bottom: 1px solid ${COLORS.LINE_100};
`;

function AskCard({ contact }: { contact: ContactResponse }) {
  return (
    <StyledAskCard alignItems='flex-start' gap={12}>
      <Badge theme={contact.answerStatus ? BADGE_THEME.PRIMARY : BADGE_THEME.OUTLINE}>{contact.answerStatus ? '답변완료' : '답변대기'}</Badge>
      <Flex.Horizontal className='tw-mt-[8px]' alignItems='center' gap={4}>
        {contact.secretStatus ? (
          <>
            <SecretIcon />
            <Typography.Sub fontSize='14px'>비밀글 입니다.</Typography.Sub>
          </>
        ) : (
          <Typography.Sub fontSize='14px'>{contact.descript}</Typography.Sub>
        )}
      </Flex.Horizontal>
      <Flex.Horizontal gap={20}>
        <Typography.Third fontSize='12px'>{contact.userId}</Typography.Third>
        <Typography.Third fontSize='12px'>{format(contact.createDatetime, 'yyyy.MM.dd')}</Typography.Third>
      </Flex.Horizontal>
    </StyledAskCard>
  );
}

export default AskCard;
