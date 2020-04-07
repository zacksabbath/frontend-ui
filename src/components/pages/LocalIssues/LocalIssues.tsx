import React, { useState } from 'react';

import { AccordionUL, Bubble } from 'components';

export default function LocalIssues() {
  const [accordionFill, setAccordion] = useState([
    {
      issue: 'Education',
      subIssues: {},
      open: false,
    },
    {
      issue: 'Environment',
      subIssues: {},
      open: false,
    },
    {
      issue: 'Education',
      subIssues: {},
      open: false,
    },
  ]);

  return (
    <>
      {accordionFill.map((accordionFill: any, i: any) => (
        <AccordionUL accordionFill={accordionFill} index={i} />
      ))}
    </>
  );
}
