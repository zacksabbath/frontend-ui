import React from 'react';
import styled, { css } from 'styled-components';

type InitiativesCardProps = {
  initiativeName: string;
  issue: string;
  initiativeType: string;
  votesFor: number;
  votesAgainst: number;
};

export default function InitiativesCard(props: InitiativesCardProps) {
  return (
    <div>
      <div>Initiative Name: {props.initiativeName}</div>
      <div>Issue: {props.issue}</div>
      <div>Initiative Type: {props.initiativeType}</div>
      <div>Votes For: {props.votesFor}</div>
      <div>Votes Against: {props.votesAgainst}</div>
    </div>
  );
}
