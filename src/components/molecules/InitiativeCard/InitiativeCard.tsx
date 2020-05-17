import React from 'react';
// import styled, { css } from 'styled-components';

interface IInitiativeCard {
  initiativeName: string; //title, center
  issue: string; //top right bubble
  initiativeType: string; //top left bubble
  votesFor: number; // bottom left center
  votesAgainst: number; //bottom right center
}

export default function InitiativeCard(props: IInitiativeCard) {
  console.log(props);
  return <div>InitiativeCard</div>;
}
