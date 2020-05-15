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
  border-radius: 10px;
  border-color: black;
  height: 20px;
  margin-top: 0;
  :focus {
    border-width: 4px;
    border-color: magenta;
    border-radius: 10px;
    outline: none;
  }
`;

const DropDown = styled(TextField)`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const TextID = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
  color: magenta;
`;

interface IInputIdentification {
  text: string;
}

export default function InputField(props: IInputIdentification) {
  const { text } = props;

  return (
    <InputWrapper>
      <TextID>{text}</TextID>
      <TextField />
    </InputWrapper>
  );
}
