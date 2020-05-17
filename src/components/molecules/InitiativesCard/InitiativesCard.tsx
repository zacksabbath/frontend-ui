import React from 'react';
// import styled, { css } from 'styled-components';

type InitiativesCardProps = {
  initiativeName: string;
  issue: string;
  initiativeType: string;
  votesFor: number;
  votesAgainst: number;
};

export default function InitiativesCard(props: InitiativesCardProps) {
  console.log(props);
  return <div>InitiativesCard</div>;
}
