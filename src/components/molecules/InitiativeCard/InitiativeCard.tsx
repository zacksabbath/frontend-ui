import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Bubble, Card } from '../../../components';

interface IInitiativeCard {
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

const TitleSection = styled.div`
  text-align: center;
  font-size: 16;
`;

const Title = styled.span`
  font-weight: ${({ theme: { font } }) => font.weights.semiBold};
`;

const VoteSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const VoteBubble = styled(Bubble)(({ theme }) => {
  const { spacing } = theme;
  return css`
    padding: ${spacing.xs};
    margin: ${spacing.xs};
  `;
});

const VotesFor = styled(VoteBubble)`
  color: green;
`;

const VotesAgainst = styled(VoteBubble)`
  color: red;
`;

const VoteCount = styled.span`
  color: black;
  font-size: 12px;
  margin-left: ${({ theme: { spacing } }) => spacing.xs};
`;

const CardWrapper = styled(Card)(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing.md,
  };
});

export default function InitiativeCard(props: IInitiativeCard) {
  const { name, issue, type, votesFor, votesAgainst } = props;
  return (
    <CardWrapper>
      <TopSection>
        <Bubble>{issue}</Bubble>
        <Bubble>{type}</Bubble>
      </TopSection>

      <TitleSection>
        <Title>{name}</Title>
      </TitleSection>

      <VoteSection>
        <VotesFor>
          <FontAwesomeIcon icon={faCheckCircle} />
          <VoteCount>{votesFor}</VoteCount>
        </VotesFor>
        <VotesAgainst>
          <FontAwesomeIcon icon={faTimesCircle} />
          <VoteCount>{votesAgainst}</VoteCount>
        </VotesAgainst>
      </VoteSection>
    </CardWrapper>
  );
}
