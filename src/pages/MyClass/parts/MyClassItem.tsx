import styled from 'styled-components';

import Button from '@@components/Button';
import ClassBox from '@@components/ClassBox';
import { ClassBoxProps } from '@@components/ClassBox/types';
import Flex from '@@components/Flex';

const StyledButtonContainer = styled(Flex.Horizontal)`
  margin-top: 8px;
  & > button {
    flex: 1;
  }
`;

function MyClassItem(props: ClassBoxProps) {
  return (
    <ClassBox {...props}>
      <StyledButtonContainer gap={12}>
        <Button.Tiny theme='outline'>수정하기</Button.Tiny>
        <Button.Tiny theme='secondary'>삭제</Button.Tiny>
      </StyledButtonContainer>
    </ClassBox>
  );
}

export default MyClassItem;
