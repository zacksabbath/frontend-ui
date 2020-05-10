import React, { useEffect, useState } from 'react';
import { Newsfeed } from '../../../components';

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

  useEffect(() => {
    getNewsfeed();
  }, []);

  // Need Loading State here
  if (!newsfeedItems) {
    return <div>Loading...</div>;
  }

  return <Newsfeed newsfeedItems={newsfeedItems} />;
}
