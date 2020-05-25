import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RaceCard, IRaceCard } from '../../../components';

interface IRaceGroup {
  location: string;
  races: IRaceCard[];
}

const RaceLocation = styled.div(({ theme }) => {
  const { spacing, color, font } = theme;
  console.log('color!!', color);
  return css`
    font-family: ${font.family};
    font-size: 15px;
    text-align: center;
    background-image: linear-gradient(
      ${color.gradient.primary.light},
      ${color.gradient.primary.dark}
    );
    padding: ${spacing.sm};
    cursor: pointer;

    > * {
      color: ${color.text.primary};
    }
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
