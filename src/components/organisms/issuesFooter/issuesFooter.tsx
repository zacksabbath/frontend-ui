import React, { useState } from 'react';
import { FooterNav } from 'components';
import styled from 'styled-components';

const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;

  .isActive {
    border-top-color: #da0064;
    border-width: 5px 0 0 0;
  }
`;

export default function IssuesFooter() {
  const [issues] = useState([
    {
      page: '/Local',
      name: 'Local',
      isCurrent: false,
    },
    {
      page: '/State',
      name: 'State',
      isCurrent: false,
    },
    {
      page: '/Federal',
      name: 'Federal',
      isCurrent: false,
    },
  ]);

  return (
    <FooterStyle>
      {issues.map((issue, index) => (
        <FooterNav issue={issue} index={index} />
      ))}
    </FooterStyle>
  );
}
