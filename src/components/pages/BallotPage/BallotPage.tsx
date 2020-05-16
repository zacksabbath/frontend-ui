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

  // TODO: Make this section more performant (We don't want to necessarily rerender every cycle. Perhaps connect this to state?)
  const $elections = (
    <>
      {mockElection.map(election => (
        <RaceGroup {...election} />
      ))}
    </>
  );
  const $initiatives = <div>Initiatives!!!</div>;

  const $content = activeTab === Tab.Elections ? $elections : $initiatives;

  return <DefaultTemplate header={$header} content={$content} />;
}
