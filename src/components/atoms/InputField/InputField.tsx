import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
});

//didnt see magenta in theme colors
const TextInputField = styled.input`
  padding: 6px 8px;
  border-radius: 10px;
  border-color: black;
  height: 20px;
  width: 20%;
  :focus {
    border-width: 4px;
    border-color: magenta;
    border-radius: 10px;
    outline: none;
  }
`;

const TextID = styled.p(({ theme }) => {
  const { font } = theme;

  return css`
    margin-left: 10px;
    margin-bottom: 0;
    color: magenta;
    font-weight: ${font.weights.medium};
  `;
});

interface IInputIdentification {
  text: string;
}

export default function InputField(props: IInputIdentification) {
  const { text } = props;

  return (
    <InputWrapper>
      <TextID>{text}</TextID>
      <TextInputField />
    </InputWrapper>
  );
}
