import React, { useState } from 'react';
import {
  DefaultTemplate,
  Header,
  RaceGroup,
  InitiativeGroup,
} from '../../../components';
import { useHistory } from 'react-router-dom';
import { mockElection, mockInitiativeGroup } from '../../../mocks';

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

  // TODO: Make this section more performant (We don't want to necessarily rerender every cycle. Perhaps connect this to state?)
  const $elections = (
    <>
      {mockElection.map((election, i) => (
        <RaceGroup {...election} key={i} />
      ))}
    </>
  );
  const $initiatives = (
    <>
      {[mockInitiativeGroup].map((initiativeGroup, i) => (
        <InitiativeGroup {...initiativeGroup} key={i} />
      ))}
    </>
  );

  const $content = activeTab === Tab.Elections ? $elections : $initiatives;

  return <DefaultTemplate header={$header} content={$content} />;
}
