import React from 'react';
import styled, { css } from 'styled-components';

const DropdownWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
});

const TextID = styled.p(({ theme }) => {
  const { font } = theme;

  return css`
    margin-bottom: 0;
    color: white;
    font-weight: ${font.weights.medium};
  `;
});

const DropdownContainer = styled.select(({ theme }) => {
  const { action } = theme;

  return css`
    padding: 6px 8px;
    border-radius: 10px;
    border-color: black;
    height: 20px;
    width: 20%;
    &:focus {
      border-width: 4px;
      border-color: magenta;
      border-radius: 10px;
      outline: none;
      color: ${action.selected};
    }
  `;
});

interface TextID {
  text: string;
}

export default function DropdownField(props: any) {
  const { text } = props;

  return (
    <>
      <DropdownWrapper>
        <TextID>{text}</TextID>
        <DropdownContainer />
      </DropdownWrapper>
    </>
  );
}
