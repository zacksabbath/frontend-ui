import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
  `;
});

const TextField = styled.input`
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  height: 20px;
  margin: 0;
  :focus {
    border-width: 4px;
    border-color: magenta;
    border-radius: 10px;
    outline: none;
  }
`;

export default function InputField() {
  return (
    <InputWrapper>
      <TextField />
    </InputWrapper>
  );
}
