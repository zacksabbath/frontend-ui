import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ButtonStyle } from 'components';

const FooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  background-color: #26154a;
  color: white;
  bottom: 0;
  height: 10%;

  .ButtonStyle {
    width: 34%;
    text-align: center;
  }
`;

//Push to history once I have somewhere for them to go
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
  return (
    <>
      <FooterStyle>
        <ButtonStyle className="ButtonStyle" onClick={localPage}>
          Local
        </ButtonStyle>
        <ButtonStyle className="ButtonStyle" onClick={statePage}>
          State
        </ButtonStyle>
        <ButtonStyle className="ButtonStyle" onClick={federalPage}>
          Federal
        </ButtonStyle>
      </FooterStyle>
    </>
  );
}
