import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
import { Avatar, FooterNav } from 'components';
import { useHistory } from 'react-router-dom';

const AvatarContainer = styled.div`
  margin: 40px;
  margin-right: 0px;
  display: flex;
  justify-content: flex-end;
`;

const LogoImg = styled.img`
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

export default function Homepage() {
  const history = useHistory();
  return (
    <>
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
          onClick={() => history.push('/newsfeed')}
        />
      </FlexWrapper>
      <FooterNav />
    </>
  );
}
