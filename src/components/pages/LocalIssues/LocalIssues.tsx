import React, { useState, useEffect } from 'react';

import { AccordionUL } from 'components';

import localIssuesAPI from './localIssuesAPI';

export default function LocalIssues() {
  const [localIssuesList, setLocalIssues] = useState();

  async function issuesAPI() {
    let response = await fetch(
      'http://my-json-server.typicode.com/stump-vote/mock-fe-api/issueDetail'
    );
    const data = await response.json();
    setLocalIssues(data);
  }

  useEffect(() => {
    issuesAPI();
  }, []);

  if (!localIssuesList) {
    return <div>Loading...</div>;
  }

  let response = localIssuesAPI;

  return (
    <>
      {response?.map(response => {
        return <AccordionUL issues={response} />;
      })}
    </>
  );
}
