import styled from 'styled-components';

import Badge from '@@components/Badge';
import { BADGE_THEME } from '@@components/Badge/constants';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SecretIcon } from '@@pages/ClassDetail/icons';
import { AskStatus } from '@@pages/ClassDetail/types';

const StyledAskCard = styled(Flex.Vertical)`
  padding: 20px 0;
  border-bottom: 1px solid ${COLORS.LINE_100};
`;

function AskCard({ status, isSecret }: { status: AskStatus; isSecret?: boolean }) {
  return (
    <StyledAskCard alignItems='flex-start' gap={12}>
      <Badge theme={status === 'complete' ? BADGE_THEME.PRIMARY : BADGE_THEME.OUTLINE}>{status == 'complete' ? '답변완료' : '답변대기'}</Badge>
      <Flex.Horizontal className='tw-mt-[8px]' alignItems='center' gap={4}>
        {isSecret ? (
          <>
            <SecretIcon />
            <Typography.Sub fontSize='14px'>비밀글 입니다.</Typography.Sub>
          </>
        ) : (
          <Typography.Sub fontSize='14px'>문의사항입니다.</Typography.Sub>
        )}
      </Flex.Horizontal>
      <Flex.Horizontal gap={20}>
        <Typography.Third fontSize='12px'>kimj****</Typography.Third>
        <Typography.Third fontSize='12px'>2024.09.20</Typography.Third>
      </Flex.Horizontal>
    </StyledAskCard>
  );
}

export default AskCard;
