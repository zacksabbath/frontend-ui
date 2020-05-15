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

const DropdownContainer = styled.input(({ theme }) => {
  const { action } = theme;

  return css`
    padding: 6px 8px;
    border-radius: 10px;
    border-color: black;
    height: 20px;
    &:focus {
      border-width: 4px;
      border-color: magenta;
      border-radius: 10px;
      outline: none;
      color: ${action.selected};
    }
  `;
});

export default function DropdownField() {
  // const {  } = props;

  return (
    <>
      <DropdownWrapper>
        <DropdownContainer />
      </DropdownWrapper>
    </>
  );
}
