import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TextField = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  boarder-color: pink;
  margin: 0;
`;

export default function InputField() {
  return <TextField />;
}
