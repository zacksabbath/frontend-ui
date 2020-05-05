import React from 'react';
import styled, { css } from 'styled-components';

type InitiativesCardWrapperProps = {};

const InitiativesCardWrapper = styled.div<InitiativesCardWrapperProps>(
  props => {
    const theme = props.theme;

    return css`
      background-color: ${theme.background.primary}
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .issues-card-top {
        background: red;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .issues-card-mid {
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .issues-card-bottom {
        background: blue;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    `;
  }
);

type InitiativesCardProps = {
  initiativeName: string;
  issue: string;
  initiativeType: string;
  votesFor: number;
  votesAgainst: number;
};

// TODO: make this a class component and keep track of votesFor and
// votesAgainst in state
export default function InitiativesCard(props: InitiativesCardProps) {
  return (
    <InitiativesCardWrapper>
      <div className={'issues-card-top'}>
        <div className={'initiative-type'}>
          Initiative Type: {props.initiativeType}
        </div>
        <div className={'issue'}>Issue: {props.issue}</div>
      </div>
      <div className={'issues-card-mid'}>
        <div className={'initiative-name'}>
          Initiative Name: {props.initiativeName}
        </div>
      </div>
      <div className={'issues-card-bottom'}>
        {/* TODO: make these clickable and add an onClick to increase the vote tally */}
        <div className={'vote-tally votes-for'}>
          Votes For: {props.votesFor}
        </div>
        <div className={'vote-tally votes-against'}>
          Votes Against: {props.votesAgainst}
        </div>
      </div>
    </InitiativesCardWrapper>
  );
}
