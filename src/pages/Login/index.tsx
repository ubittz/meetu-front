import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';

const StyledLogin = styled(FullScreen)`
  padding: 5px 10px;
`;

function Login() {
  return <StyledLogin></StyledLogin>;
}

export default Login;
