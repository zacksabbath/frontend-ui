import React, { useEffect, useState } from 'react';
import { Newsfeed, DefaultTemplate, Header } from '../../../components';
import { useHistory } from 'react-router-dom';

export default function NewsfeedPage() {
  const [newsfeedItems, setNewsfeedItems] = useState();

  // This will be replaced by the API layer when we merge into the monorepo.
  async function getNewsfeed() {
    let response = await fetch(
      `http://my-json-server.typicode.com/stump-vote/mock-fe-api/newsFeed`
    );
    let data = await response.json();
    setNewsfeedItems(data);
  }

  const history = useHistory();

  useEffect(() => {
    getNewsfeed();
  }, []);

  const $header = (
    <Header title="Newsfeed" leftIconAction={() => history.push('/')} />
  );

  // Need Loading State here
  const $content = newsfeedItems ? (
    <Newsfeed newsfeedItems={newsfeedItems} />
  ) : (
    <div>Loading...</div>
  );

  return <DefaultTemplate header={$header} content={$content} />;
}
