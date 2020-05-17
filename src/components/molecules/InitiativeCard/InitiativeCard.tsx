import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Bubble, Card } from '../../../components';

export interface IInitiativeCard {
  name: string; //title, center
  issue: string; //top left bubble
  type: string; //top right bubble
  votesFor: number; // bottom left center
  votesAgainst: number; //bottom right center
}

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BlackBubble = styled(Bubble)(({ theme }) => {
  const { spacing } = theme;
  return css`
    color: black;
    padding: ${spacing.xs} ${spacing.sm};
    font-size: 12px;
  `;
});

const TitleSection = styled.div`
  text-align: center;
  font-size: 14;
  margin: ${({ theme: { spacing } }) => spacing.sm};
`;

const Title = styled.span`
  color: black;
  font-weight: ${({ theme: { font } }) => font.weights.semiBold};
`;

const VoteSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * {
    margin: 0 ${({ theme: { spacing } }) => spacing.sm};
  }
`;

const VotesFor = styled(BlackBubble)`
  color: green;
`;

const VotesAgainst = styled(BlackBubble)`
  color: red;
`;

const VoteCount = styled.span`
  color: black;
  margin-left: ${({ theme: { spacing } }) => spacing.xs};
`;

const CardWrapper = styled(Card)(({ theme }) => {
  const { spacing } = theme;
  return css`
    padding: ${spacing.sm};
  `;
});

export default function InitiativeCard(props: IInitiativeCard) {
  const { name, issue, type, votesFor, votesAgainst } = props;
  return (
    <CardWrapper>
      <TopSection>
        <BlackBubble>{issue}</BlackBubble>
        <BlackBubble>{type}</BlackBubble>
      </TopSection>

      <TitleSection>
        <Title>{name}</Title>
      </TitleSection>

      <VoteSection>
        <VotesFor>
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <VoteCount>{votesFor}</VoteCount>
        </VotesFor>
        <VotesAgainst>
          <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          <VoteCount>{votesAgainst}</VoteCount>
        </VotesAgainst>
      </VoteSection>
    </CardWrapper>
  );
}
