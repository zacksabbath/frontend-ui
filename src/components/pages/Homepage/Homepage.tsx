import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar, ImageButton } from '../../../components';
// import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
  `;
});

const AvatarContainer = styled.div`
  margin: 40px;
  margin-right: 0px;
  // display: flex;
  // justify-content: center;
`;

const LogoImg = styled.img`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  margin: 40px;
`;

const FlexWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

//Push to history once I have somewhere for them to go
const voteBallot = () => {
  alert(' voted ');
};

const browseIssues = () => {
  alert(' Browse Issues ');
};

const newsActivities = () => {
  alert('newsfeed');
};

export default function Homepage() {
  return (
    <HomeWrapper>
      <AvatarContainer>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </AvatarContainer>
      <LogoImg src="http://stump.zackrose.net/images/stump_logo.png" />
      <FlexWrapper>
        <ImageButton
          imageSrc="http://stump.zackrose.net/images/voting_ballot.png"
          text="My Voting Ballot"
          onClick={voteBallot}
        />

        <ImageButton
          imageSrc="http://stump.zackrose.net/images/issues.png"
          text="Browse Issues"
          onClick={browseIssues}
        />

        <ImageButton
          imageSrc="http://stump.zackrose.net/images/news.png"
          text="News & Activities"
          onClick={newsActivities}
        />
      </FlexWrapper>
    </HomeWrapper>
  );
}
