import styled from 'styled-components';

import Flex from '@@components/Flex';

const FooterContainer = styled(Flex.Horizontal)`
  padding: 10px 20px;

  & > * {
    flex: 1;
  }
`;

export default FooterContainer;
