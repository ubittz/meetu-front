import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@@components/Badge';
import { BADGE_THEME } from '@@components/Badge/constants';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledClassInfo = styled(Flex.Vertical)`
  padding: 24px 20px 30px;

  .divider {
    width: 100%;
    height: 1px;
    background: ${COLORS.LINE_100};
  }

  .class_detail__top_content {
    & > p:first-child {
      flex: 0 0 auto;
      width: 68px;
    }
  }
`;

function ClassInfo({ setPaddingTop }: { setPaddingTop: (paddingTop: number) => void }) {
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  const handleClickShowHost = () => {
    navigate(pathGenerator(PAGES.PROFILE, '/1'));
  };

  useEffect(() => {
    if (ref.current?.clientHeight) {
      // 화면 크기 - Class Info 컴포넌트의 크기 - Footer 크기 - Header 크기
      setPaddingTop(screen.height - ref.current.clientHeight - 66 - 52);
    }
  }, [ref, setPaddingTop]);

  return (
    <StyledClassInfo ref={ref} className='class_detail__top' gap={20}>
      <Flex.Vertical gap={16}>
        <Flex.Horizontal gap={8}>
          <Badge theme={BADGE_THEME.PRIMARY}>HOT</Badge>
          <Badge theme={BADGE_THEME.OUTLINE}>SEOUL</Badge>
        </Flex.Horizontal>
        <Flex.Vertical gap={8}>
          <Typography.Main fontSize='20px' fontWeight={700}>
            미식가들의 쿠킹 클래스
          </Typography.Main>
          <Typography.Sub fontSize='16px' fontWeight={700}>
            김탁구
          </Typography.Sub>
        </Flex.Vertical>
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical gap={12}>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            주소
          </Typography.Third>
          <Typography.Main fontSize='14px'>서울특별시 강남구 도산대로 17-8</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            진행일
          </Typography.Third>
          <Typography.Main fontSize='14px'>2024년 12월 26일</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            모임설명
          </Typography.Third>
          <Typography.Main fontSize='14px'>
            새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
          </Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            카테고리
          </Typography.Third>
          <Typography.Main fontSize='14px'>#쿠킹</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            가격
          </Typography.Third>
          <Typography.Point fontSize='14px' fontWeight={700}>
            50,000원
          </Typography.Point>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Button.Tiny theme='outline' className='tw-mt-[4px]' onClick={handleClickShowHost}>
        호스트 정보
      </Button.Tiny>
    </StyledClassInfo>
  );
}

export default ClassInfo;
