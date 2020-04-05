import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  .AccordionStar {
    font-weight: medium;
    text-align: left;
    /* font-family: GalanoGrotesque-Medium;*/
    font-size: 20px;
    color: ${({ theme }) => theme.cardTheme?.primaryText};
    line-height: 26px;
  }

   {
    font-weight: semibold;
    /* font-family: GalanoGrotesque-SemiBold;*/
    font-size: 14px;
    color: ${({ theme }) => theme.cardTheme?.secondaryText}; /* #A082E3;*/
    padding-bottom: 10px;
  }
`;

export default function AccordionSubList(props: any) {
  return (
    <>
      <div className="news-source"></div>
    </>
  );
}
