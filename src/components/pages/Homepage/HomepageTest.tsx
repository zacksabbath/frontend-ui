import React from 'react';
import { ImageButton } from 'components';
//import { useHistory } from 'react-router-dom';

const voteBallot = () => {
  console.log(' voted ');
};

export default function Homepage(props: any) {
  return (
    <ImageButton
      imageSrc="http://stump.zackrose.net/images/voting_ballot.png"
      text="My Voting Ballot"
      onClick={voteBallot}
    />
  );
}
