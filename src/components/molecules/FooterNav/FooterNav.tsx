import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from 'components';

const FooterStyle = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: #26154a;
  bottom: 0;
  height: 10%;

  button {
    width: 34%;
    font-size: 100%;
    flex-direction: left;
  }
  .isActive {
    border-top-color: #da0064;
    border-width: 10px 0 0 0;
  }

  .notActive {
    border: none;
  }
`;

export default function FooterNav({ issue, index, toggleNav }: any) {
  return (
    <>
      <FooterStyle>
        <ButtonStyle
          className={issue.isCurrent ? 'isActive' : 'notActive'}
          key={index}
          onClick={() => toggleNav(index)}
        >
          {issue.name}
        </ButtonStyle>
      </FooterStyle>
    </>
  );
}
