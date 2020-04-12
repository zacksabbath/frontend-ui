import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
import { Avatar } from 'components';
//import { useHistory } from 'react-router-dom';

const FlexWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .top-two {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  // img {
  //   // display: flex;
  //   width: 50%;
  //   margin: 50px;
  //   justify-content: center;
  // }
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
      <Avatar image="http://stump.zackrose.net/images/avatar_sm.png" />
      <img src="http://stump.zackrose.net/images/stump_logo.png" />
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
    </div>
  );
}
