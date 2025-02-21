import { PropsWithChildren } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabHeader from '@@components/Tab/TabHeader';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TAB_LIST } from '@@pages/ClassDetail/constants';
import DetailImage from '@@pages/ClassDetail/images/detail.png';
import { useMeetingDetail } from '@@stores/meeting/hooks';

const StyledDetailInfo = styled(Flex.Vertical)`
  .detail_info__contents {
    padding: 30px 20px 0;
  }
  .divider {
    width: 100%;
    height: 1px;
    background: ${COLORS.LINE_100};
  }
`;

function TitleTypography(props: PropsWithChildren) {
  return <Typography.Sub fontSize='14px' fontWeight={700} {...props} />;
}

function DetailInfo({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const { id } = useParams();

  const { data } = useMeetingDetail(id ?? '');

  return (
    <StyledDetailInfo>
      <TabHeader itemList={TAB_LIST} selectedIndex={0} onChange={onChangeTab} />
      <Flex.Vertical className='detail_info__contents' gap={30}>
        <Flex.Vertical gap={12}>
          <TitleTypography>새로운 만남, 소소한 행복찾기 소개</TitleTypography>
          <img src={DetailImage} alt='Detail Image' />
        </Flex.Vertical>
        <div className='divider' />
        <Flex.Vertical gap={12}>
          <TitleTypography>진행정보</TitleTypography>
          <Typography.Sub fontSize='14px'>
            {data?.processGuide.split('\n').map((line, index) => (
              <Typography.Sub key={index} fontSize='inherit'>
                {line}
              </Typography.Sub>
            ))}
          </Typography.Sub>
        </Flex.Vertical>
        <div className='divider' />
        <Flex.Vertical gap={12}>
          <TitleTypography>제공 / 준비물</TitleTypography>
          <Typography.Sub fontSize='14px'>{data?.item}</Typography.Sub>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledDetailInfo>
  );
}

export default DetailInfo;
