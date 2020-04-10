import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';

const FlexWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
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
    <div>
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
    </div>
  );
}
