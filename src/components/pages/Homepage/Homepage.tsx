import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const voteBallot = () => {
  alert(' voted ');
};

const browseIssues = () => {
  alert(' Browse Issues ');
};

const newsActivites = () => {
  alert(' News & Activities ');
};

export default function Homepage(props: any) {
  return (
    <HomeWrapper>
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
      </FlexWrapper>

      <ImageButton
        imageSrc="http://stump.zackrose.net/images/news.png"
        text="News & Activities"
        onClick={newsActivites}
      />
    </HomeWrapper>
  );
}
