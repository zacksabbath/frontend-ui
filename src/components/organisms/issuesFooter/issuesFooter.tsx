import React, { useState } from 'react';
import { FooterNav } from 'components';

export default function IssuesFooter() {
  const [issues] = useState([
    {
      page: '/Local',
      name: 'Local',
      isCurrent: false,
    },

    {
      page: '/Federal',
      name: 'Federal',
      isCurrent: false,
    },
    {
      page: '/State',
      name: 'State',
      isCurrent: false,
    },
  ]);

  const toggleNav = (index: any) => {
    console.log('toggleNav' + index);
  };

  return (
    <>
      {issues.map((issue, index) => (
        <FooterNav issue={issue} index={index} toggleNav={toggleNav} />
      ))}
    </>
  );
}
