import { PropsWithChildren, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledGuideBox = styled(Flex.Horizontal)`
  height: 52px;
  border-radius: 8px;
  border: 1px solid ${COLORS.LINE_100};
  box-shadow: 4px 4px 4px 0px #55555508;
  padding: 0 13px;
`;

function GuideBox({ icon, to, children }: PropsWithChildren<{ icon: ReactNode; to: string }>) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledGuideBox gap={5} alignItems='center' onClick={handleClick}>
      {icon}
      <Typography.Sub fontSize='14px'>{children}</Typography.Sub>
    </StyledGuideBox>
  );
}

export default GuideBox;
