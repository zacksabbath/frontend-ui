import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
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
  }
  .currentButton {
    border-top-color: #da0064;
    border-width: 10px 0 0 0;
  }

  .notCurrent {
    border: none;
  }
`;

type FooterProps = {
  isCurrent?: string;
  navRoute?: string;
};

export default function FooterNav(props: FooterProps) {
  var history = useHistory();
  var location = useLocation();
  let currentLocation = location.pathname;

  let isLocal;
  let isState;
  let isFederal;

  if (currentLocation === '/LocalIssues') {
    isLocal = true;
    console.log('true');
  } else if (currentLocation === '/StateIssues') {
    isState = true;
  } else if (currentLocation === '/FederalIssues') {
    isFederal = true;
  }

  return (
    <>
      <FooterStyle>
        <ButtonStyle
          className={isLocal ? 'currentButton' : 'notCurrent'}
          onClick={() => history.push('/LocalIssues')}
        >
          Local
        </ButtonStyle>
        <ButtonStyle
          className={isState ? 'currentButton' : 'notCurrent'}
          onClick={() => history.push('/StateIssues')}
        >
          State
        </ButtonStyle>
        <ButtonStyle
          className={isFederal ? 'currentButton' : 'notCurrent'}
          onClick={() => history.push('/FederalIssues')}
        >
          Federal
        </ButtonStyle>
      </FooterStyle>
    </>
  );
}
