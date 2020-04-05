import React, { Component } from 'react';
import styled from 'styled-components';

let IconImg = './Icon.svg';

const Main = styled.img``;

export default function Icon() {
  return (
    <Main>
      <img src={IconImg} />
    </Main>
  );
}
