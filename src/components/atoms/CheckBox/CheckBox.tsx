import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.div`
display: inline-block;
width: 16px;
height: 16px;
// background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
border-radius: 3px;
transition: all 150ms;
`;

export default function CheckBox() {
  return <StyledCheckBox />;
}
