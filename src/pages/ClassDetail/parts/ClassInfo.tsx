import { useEffect, useRef } from 'react';

import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@@components/Badge';
import { BADGE_THEME } from '@@components/Badge/constants';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { CATEGORY_STRINGS } from '@@pages/Home/constants';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { DISTRICT } from '@@stores/meeting/constants';
import { useMeetingDetail } from '@@stores/meeting/hooks';

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
  const { id } = useParams();

  const ref = useRef<HTMLDivElement>(null);

  const { data } = useMeetingDetail(id ?? '');

  const district = Object.entries(DISTRICT).find(([, value]) => data?.address.includes(value))?.[0];

  const handleClickShowHost = () => {
    // navigate(pathGenerator(PAGES.PROFILE, `/${data.}`));
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
          {district && <Badge theme={BADGE_THEME.OUTLINE}>{district}</Badge>}
        </Flex.Horizontal>
        <Flex.Vertical gap={8}>
          <Typography.Main fontSize='20px' fontWeight={700}>
            {data?.name}
          </Typography.Main>
          <Typography.Sub fontSize='16px' fontWeight={700}>
            {data?.hostName}
          </Typography.Sub>
        </Flex.Vertical>
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical gap={12}>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            주소
          </Typography.Third>
          <Typography.Main fontSize='14px'>{data?.address}</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            진행일
          </Typography.Third>
          <Typography.Main fontSize='14px'>{data?.processDate && format(data.processDate, 'yyyy년 MM월 dd일')}</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            모임설명
          </Typography.Third>
          <Typography.Main fontSize='14px'>{data?.descript}</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            카테고리
          </Typography.Third>
          <Typography.Main fontSize='14px'>{data?.category && CATEGORY_STRINGS[data.category]}</Typography.Main>
        </Flex.Horizontal>
        <Flex.Horizontal className='class_detail__top_content'>
          <Typography.Third fontSize='14px' fontWeight={700}>
            가격
          </Typography.Third>
          <Typography.Point fontSize='14px' fontWeight={700}>
            {(data?.cost ?? 0).toLocaleString()}원
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
