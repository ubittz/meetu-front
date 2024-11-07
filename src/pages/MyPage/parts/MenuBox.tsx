import { PropsWithChildren, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledMenuBox = styled(Flex.Vertical)`
  flex: 0 0 auto;

  border-radius: 8px;
  border: 1px solid ${COLORS.LINE_100};
  width: 120px;
  height: 80px;
  padding: 16px 12px 12px;

  box-shadow: 4px 4px 4px 0px #55555508;
`;

function MenuBox({ icon, to, children }: PropsWithChildren<{ icon: ReactNode; to: string }>) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledMenuBox onClick={handleClick} justifyContent='space-between'>
      <Typography.Sub fontSize='14px'>{children}</Typography.Sub>
      {icon}
    </StyledMenuBox>
  );
}

export default MenuBox;
