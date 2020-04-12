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
  font-size: 15px;
  line-height: 22px;
  border-radius: 1px;
  height: 50px;
  position: relative;
  text-align: left;

  ul {
    list-style-type: none;
  }
`;

//this is inplace of the API
const issues = [
  {
    name: 'Economy',
    subIssues: [],
  },
  {
    name: 'Education',
    subIssues: [],
  },
  {
    name: 'Environment',
    subIssues: [
      {
        name: 'Air Quality',
      },
      {
        name: 'Flooding',
      },
      {
        name: 'Fracking',
      },
    ],
  },
  {
    name: 'Government',
    subIssues: [],
  },
  {
    name: 'Health',
    subIssues: [],
  },
  {
    name: 'Social',
    subIssues: [],
  },
];

export default function AccordionUL({
  issues,
}: {
  issues: any; //find the exact type, "typescript array"
}) {
  return (
    <Main>
      <ul className="accordionUl">
        <li className="accordionLI">{issues.name}</li>
      </ul>
    </Main>
  );
}
