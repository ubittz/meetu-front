import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const TextField = styled.input`
  height: 48px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLORS.LINE_100};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.3em;

  color: ${COLORS.TEXT_100};

  &::placeholder {
    color: ${COLORS.TEXT_400};
  }

  &:not(:placeholder-shown) {
    border-color: ${COLORS.TEXT_100};
  }

  &:read-only {
    background: ${COLORS.TEXT_100};
  }
`;

export default TextField;
