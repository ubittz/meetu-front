import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledLogin = styled.div`
  padding: 5px 10px;
`;

function Login() {
  return (
    <StyledLogin>
      <Flex.Horizontal gap={5}>
        <Flex.Vertical gap={10}>
          <Button.ExtraLarge>Extra Large Button</Button.ExtraLarge>
          <Button.Large>Large Button</Button.Large>
          <Button.Medium>Medium Button</Button.Medium>
          <Button.Small>Small Button</Button.Small>
          <Button.Tiny>Tiny Button</Button.Tiny>
        </Flex.Vertical>
        <Flex.Vertical gap={10}>
          <Button.ExtraLarge theme='outline'>Extra Large Button</Button.ExtraLarge>
          <Button.Large theme='outline'>Large Button</Button.Large>
          <Button.Medium theme='outline'>Medium Button</Button.Medium>
          <Button.Small theme='outline'>Small Button</Button.Small>
          <Button.Tiny theme='outline'>Tiny Button</Button.Tiny>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Horizontal>
        <Flex.Vertical>
          <Typography.Main>Main Text</Typography.Main>
          <Typography.Sub>Sub Text</Typography.Sub>
          <Typography.Third>Third Text</Typography.Third>
          <Typography.Placeholder>Placeholder Text</Typography.Placeholder>
        </Flex.Vertical>
      </Flex.Horizontal>
    </StyledLogin>
  );
}

export default Login;
