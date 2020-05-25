import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AvatarCarousel, IAvatar } from '../../../components';

const Race = styled.div(({ theme }) => {
  const { color, spacing, font } = theme;
  return {
    color: color.text.primary,
    backgroundColor: color.background.primary,
    fontFamily: font.family,
    padding: spacing.sm,
    textAlign: 'center',
  };
});

const RaceTitle = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
  cursor: pointer;
`;

const RaceDate = styled.p({
  fontSize: 16,
});

const Icon = styled.span(({ theme }) => {
  const { color, spacing } = theme;
  return {
    color: color.foreground.icon,
    marginLeft: spacing.sm,
  };
});

export interface IRaceCard {
  title: string;
  date: string;
  candidates: IAvatar[];
}

export default function RaceCard(props: IRaceCard) {
  const { title, date, candidates } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <Race>
      <RaceTitle onClick={() => setExpanded(!expanded)}>{title}</RaceTitle>

      {expanded && (
        <>
          <RaceDate>
            {date}
            <Icon>
              <FontAwesomeIcon icon={faInfoCircle} />
            </Icon>
          </RaceDate>

          <AvatarCarousel avatars={candidates} pageSize={6} />
        </>
      )}
    </Race>
  );
}
