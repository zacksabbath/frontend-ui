import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { AccordionList } from 'components';

const Main = styled.div`
  .accordions .accordion .accordion-issue {
    position: relative;
    font-size: 20px;

    transition: all 0.4s ease;
  }

  .accordions .accordion .accordion-issue::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    height: 30px;
    width: 0px;

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

export default function AccordionListFeed() {
  const [accordions, setAccordion] = useState([
    {
      issue: 'economy',
      subIssue: ['taxes', 'wall street'],
      open: false,
    },
    {
      issue: 'education',
      subIssue: '',
      open: false,
    },
    {
      issue: 'environment',
      subIssue: 'Clean Air',
      open: false,
    },
  ]);

  const toggleAccordion = (index: any) => {
    console.log('toggleAccordion' + index);
    setAccordion(
      accordions.map((accordion, i) => {
        if (i === index) {
          accordion.open = !accordion.open;
        } else {
          accordion.open = false;
        }
        return accordion;
      })
    );
  };

  return (
    <Main>
      <div className="accordions">
        {accordions.map((accordion, i) => (
          <AccordionList
            accordion={accordion}
            index={i}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </Main>
  );
}
