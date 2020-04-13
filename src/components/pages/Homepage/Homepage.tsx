import React from 'react';
import { ImageButton } from 'components';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const FlexWrapper = styled.div`
  display: flex;
`;

const voteBallot = () => {
  alert(' voted ');
};

const browseIssues = () => {
  alert(' Browse Issues ');
};

export default function Homepage(props: any) {
  const history = useHistory();
  return (
    <>
      <FlexWrapper>
        {/* This broke styles on the page, need to figure out why */}
      </FlexWrapper>
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
    </>
  );
}
