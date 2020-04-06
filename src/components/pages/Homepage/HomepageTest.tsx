import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'components';
import { ImageButton } from 'components';

const HomeWrapper = styled.div`
  .avatar-image {
    display: flex;
    margin: 20px;
    justify-content: flex-end;
  }
  .logo {
    align-items: center;
    margin-top: 100px;
    img {
      width: 60%;
    }
  }
  .top-two {
    display: flex;
    justify-content: center;
  }
`;

export default function Homepage(props: any) {
  return (
    <HomeWrapper>
      <div className="avatar-style">
        <Avatar image="http://stump.zackrose.net/images/avatar1.png" />
      </div>
      <div className="logo">
        <img src="http://stump.zackrose.net/images/stump_logo.png" />
      </div>
      <div className="top-two">
        <ImageButton
          image="http://stump.zackrose.net/images/voting_ballot.png"
          text="My Voting Ballot"
        />
        <ImageButton
          image="http://stump.zackrose.net/images/issues.png"
          text="Brose Issues"
        />
      </div>
    </HomeWrapper>
  );
}
