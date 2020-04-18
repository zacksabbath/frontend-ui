import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Main = styled.div``;

export default function AccordionStar() {
  return (
    <Main>
      <FontAwesomeIcon icon={faStar} />
    </Main>
  );
}
