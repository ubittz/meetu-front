import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import { AccountType } from '@@components/ProfileDetail/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledProfileInfo = styled(Flex.Vertical)`
  padding: 24px 20px 40px;
  position: relative;

  .profile_info__stats {
    border-radius: 10px;
    background: #ffeee6;
    padding: 20px 0;

    .profile_info__stats_box {
      position: relative;
      flex: 1;

      &:nth-child(2)::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -0.5px;

        width: 1px;
        height: 40px;
        background: #ffd9c7;

        transform: translateX(-50%) translateY(-50%);
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background: ${COLORS.LINE_100};
  }

  .profile_info__description {
    overflow: hidden;
    & > p:first-child {
      overflow: hidden;
      flex: 0 0 auto;
    }
  }
`;

function ProfileInfo({ accountType, setPaddingTop }: { accountType: AccountType; setPaddingTop: (paddingTop: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current?.clientHeight) {
      // 화면 크기 - Class Info 컴포넌트의 크기 - Header 크기
      setPaddingTop(screen.height - ref.current.clientHeight - 52);
    }
  }, [ref, setPaddingTop]);

  return (
    <StyledProfileInfo ref={ref} gap={20}>
      <Typography.Main fontWeight={700} fontSize='20px'>
        김탁구
      </Typography.Main>
      <Flex.Horizontal className='profile_info__stats' alignItems='center'>
        <Flex.Vertical className='profile_info__stats_box' gap={8} alignItems='center'>
          <Typography.Sub fontWeight={700} fontSize='14px'>
            {accountType === ACCOUNT_TYPE.HOST ? '운영중인 모임' : '진행중인 모임'}
          </Typography.Sub>
          <Flex.Horizontal gap={4} alignItems='center'>
            <Typography.Point fontSize='36px' fontWeight={700}>
              N
            </Typography.Point>
            <Typography.Sub fontSize='14px' fontWeight={400}>
              건
            </Typography.Sub>
          </Flex.Horizontal>
        </Flex.Vertical>
        {accountType === ACCOUNT_TYPE.HOST && (
          <Flex.Vertical className='profile_info__stats_box' gap={8} alignItems='center'>
            <Typography.Sub fontWeight={700} fontSize='14px'>
              리뷰
            </Typography.Sub>
            <Flex.Horizontal gap={4} alignItems='center'>
              <Typography.Point fontSize='36px' fontWeight={700}>
                N
              </Typography.Point>
              <Typography.Sub fontSize='14px' fontWeight={400}>
                건
              </Typography.Sub>
            </Flex.Horizontal>
          </Flex.Vertical>
        )}
      </Flex.Horizontal>
      <div className='divider' />
      <Flex.Horizontal gap={12} className='profile_info__description'>
        <Typography.Third fontSize='14px' fontWeight={700}>
          호스트 소개
        </Typography.Third>
        <Typography.Main fontSize='14px'>
          소개글이 나오는 영역입니다. 소개글이 나오는 영역입니다. 소개글이 나오는 영역입니다. 소개글이 나오는 영역입니다. 소개글이 나오는 영역입니다.
          소개글이 나오는 영역입니다. 소개글이 나오는 영역입니다.
        </Typography.Main>
      </Flex.Horizontal>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
