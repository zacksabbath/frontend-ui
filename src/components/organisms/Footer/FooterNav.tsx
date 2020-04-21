import React from 'react';
import styled from 'styled-components';
import { useHistory, Link, useLocation } from 'react-router-dom';
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

//Place holder. Will replace with onClick={() => history.push('/localPage')}
const localPage = () => {
  console.log(' Local Page Goes Here ');
};

const statePage = () => {
  console.log(' State Page Goes Here ');
};

const federalPage = () => {
  console.log(' Federal Page Goes Here ');
};

export default function FooterNav() {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <FooterStyle>
        <ButtonStyle className="currentButton" onClick={localPage}>
          Local
        </ButtonStyle>
        <ButtonStyle className="notCurrent" onClick={statePage}>
          State
        </ButtonStyle>
        <ButtonStyle className="notCurrent" onClick={federalPage}>
          Federal
        </ButtonStyle>
      </FooterStyle>
    </>
  );
}
