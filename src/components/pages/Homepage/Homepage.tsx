import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';

const FlexWrapper = styled.div`
  .top-two {
    display: flex;
    margin: 20px;
  }
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
    <FlexWrapper>
      <div className="top-two">
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
      </div>

      <ImageButton
        imageSrc="http://stump.zackrose.net/images/news.png"
        text="News & Activities"
        onClick={newsActivites}
      />
    </FlexWrapper>
  );
}
