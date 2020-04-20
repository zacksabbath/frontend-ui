import React from 'react';
import styled from 'styled-components';
import AccordionButton from './AccordionButton';
import AccordionStar from './AccordionStar';

const Main = styled.ul`
  margin: 0;
  list-style-type: none;
  .accordionLI {
    float: left;
    padding: 2px;
  }
`;

interface IssuesProps {
  issues?: any;
}

export default function AccordionUL(props: IssuesProps) {
  const { issues } = props;

  return (
    <Main>
      <AccordionButton>
        <li>
          <div className="accordionLI">
            <AccordionStar />
          </div>
          <div className="accordionLI">{issues.name}</div>
        </li>
      </AccordionButton>
    </Main>
  );
}
