import React, { useState } from 'react';
import { DefaultTemplate, Header, RaceGroup } from '../../../components';
import { useHistory } from 'react-router-dom';
import { mockElection } from '../../../mocks';

enum Tab {
  Elections,
  Initiatives,
}

export default function BallotPage() {
  const [activeTab, setActiveTab] = useState(Tab.Elections);
  const history = useHistory();

  const navTabs = [
    {
      text: 'Elections',
      onClick: () => setActiveTab(Tab.Elections),
      isActive: activeTab === Tab.Elections,
    },
    {
      text: 'Initiatives',
      onClick: () => setActiveTab(Tab.Initiatives),
      isActive: activeTab === Tab.Initiatives,
    },
  ];

  const $header = (
    <Header
      title="My Ballot"
      leftIconAction={() => history.push('/')}
      navTabs={navTabs}
    />
  );

  const $elections = (
    <>
      {mockElection.map(election => (
        <RaceGroup {...election} />
      ))}
    </>
  );
  const $initiatives = <div>Initiatives!!!</div>;

  return (
    <DefaultTemplate
      header={$header}
      content={activeTab === Tab.Elections ? $elections : $initiatives}
    />
  );
}
