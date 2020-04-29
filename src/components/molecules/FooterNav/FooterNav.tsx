import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from 'components';
import { useHistory, useLocation } from 'react-router-dom';

const FooterStyle = styled.div`
  display: flex;
  position: relative;
  display: inline-block;
  height: 100%;
  width: 33.33%;

  .notActive {
    border-top-color: #3c266e;
    border-width: 5px 0 0 0;
  }
`;

export default function FooterNav({ issue, index }: any) {
  const history = useHistory();
  const location = useLocation();

  if (issue.page === location.pathname) {
    issue.isCurrent = true;
  } else {
    issue.isCurrent = false;
  }

  return (
    <>
      <FooterStyle>
        <ButtonStyle
          className={issue.isCurrent ? 'isActive' : 'notActive'}
          key={index}
          onClick={() => history.push(issue.page)}
        >
          {issue.name}
        </ButtonStyle>
      </FooterStyle>
    </>
  );
}
