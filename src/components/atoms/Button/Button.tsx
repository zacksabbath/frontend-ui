import styled, { css } from 'styled-components';
import React from 'react';

type ButtonWrapperProps = {
  primary?: boolean;
};

type ButtonProps = ButtonWrapperProps & { text: string };

//variables:
//link
//hover
//active
//border

const ButtonWrapper = styled.button<ButtonWrapperProps>`
    /* background-color: ${foo => (foo.primary ? 'yellow' : 'grey')}; */
    background-color: yellow;
    color: #564810;
    border-radius: 50px;
    height: 40px;
    font-size: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    ${({ primary }) =>
      !primary &&
      css`
        background-color: #eee;
        color: #333;
      `}
`;

export default function Button(props: ButtonProps) {
  const { primary, text } = props;
  return <ButtonWrapper primary={primary}>{text}</ButtonWrapper>;
}
