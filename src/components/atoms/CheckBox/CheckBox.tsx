import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
`;

export default function CheckBox() {
  return <StyledCheckBox />;
}
