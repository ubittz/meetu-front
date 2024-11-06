import { FormEventHandler, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const StyledAskInput = styled.form`
  display: flex;
  align-items: center;
  gap: 2px;

  border: 1px solid ${COLORS.LINE_100};
  border-radius: 4px;
  height: 42px;

  padding: 0 10px;

  & > input {
    flex: 1;
    outline: none;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3em;
    color: ${COLORS.TEXT_100};

    &::placeholder {
      color: ${COLORS.TEXT_400};
    }
  }

  & > button {
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.TEXT_200};
    line-height: 1.3em;
  }
`;

function AskInput({ onSubmit, ...props }: { onSubmit?: FormEventHandler<HTMLFormElement> } & InputHTMLAttributes<HTMLInputElement>) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <StyledAskInput onSubmit={handleSubmit}>
      <input {...props} />
      <button>입력</button>
    </StyledAskInput>
  );
}

export default AskInput;
