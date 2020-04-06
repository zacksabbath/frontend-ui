import React from 'react';
// import styled from 'styled-components';
// import { Avatar } from 'components';
import { ImageButton } from 'components';

voteBallot = () => {
  console.log('My Voting Ballot Click');
};

export default function Homepage(props: any) {
  return <ImageButton image="" text="My Voteing Ballot" onClick={voteBallot} />;
}
