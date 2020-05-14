import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AvatarCarousel, IAvatar } from '../../../components';

const Race = styled.div(({ theme }) => {
  const { background, text, spacing, font } = theme;
  return {
    color: text?.primary,
    backgroundColor: background?.primary,
    fontFamily: font.family,
    padding: spacing.sm,
  };
});

const RaceTitle = styled.p({
  fontSize: 20,
  ':hover': {
    cursor: 'pointer',
  },
});

const RaceDate = styled.p({
  fontSize: 16,
});

const Icon = styled.span(({ theme }) => {
  const { foreground, spacing } = theme;
  return {
    color: foreground?.icon,
    marginLeft: spacing.sm,
  };
});

interface IRaceCard {
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
