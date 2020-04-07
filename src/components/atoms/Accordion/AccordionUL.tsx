import React from 'react';
import styled from 'styled-components';

const Main = styled.button`
  background-color: ${({ theme }) => theme.main.colors.purple};
  color: ${({ theme }) => theme.main.colors.white};
  border-color: ${({ theme }) => theme.main.colors.purple};
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
`;

export default function AccordionUL({
  accordionFill,
  index,
}: {
  accordionFill: any;
  index: any;
}) {
  return (
    <Main>
      <ul className="accordionUl">
        <li className="accordionLI">
          <button>{accordionFill.issue}</button>
        </li>
      </ul>
    </Main>
  );
}
