import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { InitiativeCard, IInitiativeCard } from '../../../components';
import { getTheme } from '../../../global/theme';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Location = styled.div(({ theme }) => {
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
    /* cursor: pointer; */
  `;
});

const Date = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme: { text } }) => text.primary};
  font-family: ${({ theme: { font } }) => font.family};
`;

const Icon = styled.span(({ theme }) => {
  const { foreground, spacing } = theme;
  return {
    color: foreground?.icon,
    marginLeft: spacing.sm,
  };
});

interface IInitiativeGroup {
  initiatives: IInitiativeCard[];
  location: string;
  date: string;
}

const Wrap = styled.div(({ theme }) => {
  const { background } = theme;
  return {
    backgroundColor: background.primary,
  };
});

const InitiativesSection = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing.sm,
  };
});

export default function InitiativeGroup(props: IInitiativeGroup) {
  const { initiatives, location, date } = props;
  return (
    <Wrap>
      <Location>{location}</Location>
      <Date>
        {date}
        <Icon>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Icon>
      </Date>
      <InitiativesSection>
        <ThemeProvider theme={getTheme('vote')}>
          {initiatives.map((initiative, i) => (
            <InitiativeCard {...initiative} key={i} />
          ))}
        </ThemeProvider>
      </InitiativesSection>
    </Wrap>
  );
}
