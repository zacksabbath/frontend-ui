import React from 'react';
import styled, { css } from 'styled-components';
import { DefaultTemplate, Header, ImageButton } from '../../../components';
import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
  `;
});

const LogoImg = styled.img`
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

const FlexWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Homepage() {
  const history = useHistory();
  const $content = (
    <HomeWrapper>
      <LogoImg src="http://stump.zackrose.net/images/stump_logo.png" />
      <FlexWrapper>
        <ImageButton
          imageSrc="http://stump.zackrose.net/images/voting_ballot.png"
          text="My Voting Ballot"
          onClick={() => history.push('/ballot')}
        />

        <ImageButton
          imageSrc="http://stump.zackrose.net/images/issues.png"
          text="Browse Issues"
          onClick={() => history.push('/issues')}
        />

        <ImageButton
          imageSrc="http://stump.zackrose.net/images/news.png"
          text="News & Activities"
          onClick={() => history.push('/newsfeed')}
        />
      </FlexWrapper>
    </HomeWrapper>
  );
  const $header = <Header />;

  return <DefaultTemplate header={$header} content={$content} />;
}
