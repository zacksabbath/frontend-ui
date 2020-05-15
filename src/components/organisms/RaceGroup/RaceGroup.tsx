import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RaceCard, IRaceCard } from '../../../components';

interface IRaceGroup {
  location: string;
  races: IRaceCard[];
}

const RaceLocation = styled.div(({ theme }) => {
  const { gradient, spacing, text, font } = theme;
  return css`
    font-family: ${font.family};
    color: ${text.primary};
    font-size: 15px;
    text-align: center;
    background-image: linear-gradient(
      ${gradient.primary.light},
      ${gradient.primary.dark}
    );
    padding: ${spacing.sm};
    cursor: pointer;
  `;
});

export default function(props: IRaceGroup) {
  const { location, races } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <RaceLocation onClick={() => setExpanded(!expanded)}>
        {location}
      </RaceLocation>
      {expanded && races.map((race, i) => <RaceCard {...race} key={i} />)}
    </>
  );
}
