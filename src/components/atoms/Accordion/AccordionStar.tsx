import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
import { IconName } from '@fortawesome/fontawesome-common-types';

const Main = styled.div`
  position: sticky;
`;

export default function AccordionStar() {
  return (
    <Main>
      <FontAwesomeIcon icon={fullStar} />
    </Main>
  );
}
