import React, { Component } from 'react';
import styled from 'styled-components';

import { AccordionCount, AccordionSubList, Icon } from 'components';

const accordionProps = ['economy', 'educaiton', 'environment'];

const Main = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  font: GalanoGrotesque;

  button {
    width: 100%;
    flex-direction: row;
    font-size: 15px;
    font-family: GalanoGrotesque-Regular;
    line-height: 22px;
    border-radius: 1px;
    padding: 0px 20px;
    height: 50px;
    display: block;
    position: relative;
    width: 100%;
    text-align: left;
    background-color: ${({ theme }) => theme.main.colors.purple};
    color: ${({ theme }) => theme.main.colors.white};
    border-color: ${({ theme }) => theme.main.colors.purple};
  }

  div {
    margin: 2px;
    float: right;
  }

  .accordions .accordion .accordion-issue {
    position: relative;
    font-size: 20px;
    padding-right: 80px;

    transition: all 0.4s ease;
  }

  .accordions .accordion .accordion-issue::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;

    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    transition: all 0.4s ease-out;
  }

  .accordions .accordion .accordion-subIssue {
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
  }

  .accordions .accordion.open .accordion-issue {
    margin-bottom: 15px;
  }

  .accordions .accordion.open .accordion-issue::after {
    transform: translateY(-50%) rotate(180deg);
  }

  .accordions .accordion.open .accordion-subIssue {
    max-height: 1000px;
    opacity: 1;
  }
`;

export default function AccordionList({
  accordion,
  index,
  toggleAccordion,
}: any) {
  return (
    <Main>
      <div
        className={'accordion' + (accordion.open ? 'open' : '')}
        key={index}
        onClick={() => toggleAccordion(index)}
      >
        <button className="accordion-issue">
          {accordion.issue}
          <AccordionCount />
        </button>
        <button className="accordion-subIssue">{accordion.subIssue}</button>
      </div>
    </Main>
  );
}
