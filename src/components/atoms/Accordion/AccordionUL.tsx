import React from 'react';
import styled from 'styled-components';

const Main = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 720px;
  flex-direction: row;
  font-size: 15px;
  font-family: GalanoGrotesque-Regular;
  line-height: 22px;
  border-radius: 1px;
  height: 50px;
  display: block;
  position: relative;
  text-align: left;
  background-color: ${({ theme }) => theme.main.colors.purple};
  color: ${({ theme }) => theme.main.colors.white};
  border-color: ${({ theme }) => theme.main.colors.purple};
`;

export default function AccordionUL() {
  return (
    <Main>
      <ul className="accoridonUl"></ul>
    </Main>
  );
}
