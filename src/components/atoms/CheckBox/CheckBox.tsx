import React from 'react';
import styled from 'styled-components';

// This component is in progress
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
`;

export default function Checkbox() {
  return <StyledCheckbox />;
}
