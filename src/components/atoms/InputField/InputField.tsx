import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div(({ theme }) => {
  const { font } = theme;
  return css`
    display: flex;
    flex-direction: column;
    font-family: ${font.family};
  `;
});

const Label = styled.span(({ theme }) => {
  const { font, text, spacing } = theme;

  return css`
    font-size: 15px;
    color: ${text.secondary};
    font-weight: ${font.weights.medium};
    margin-bottom: ${spacing.xs};
  `;
});

const TextInputField = styled.input(({ theme }) => {
  const { action, foreground, spacing } = theme;
  return css`
    padding: ${spacing.sm};
    border-radius: 7px;
    border: 2px solid ${foreground.secondary};
    outline: none;

    &:focus {
      border-color: ${action.selected};
    }
  `;
});

interface IInputIdentification {
  name: string;
}

export default function InputField(props: IInputIdentification) {
  const { name } = props;

  return (
    <InputWrapper>
      <Label>{name}</Label>
      <TextInputField />
    </InputWrapper>
  );
}
