import React, { useEffect, useState } from 'react';
import { Newsfeed } from '../../../components';

export default function NewsfeedPage() {
  const [newsfeedItems, setNewsfeedItems] = useState();

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

  if (!newsfeedItems) {
    return <div>Loading...</div>;
  }

  return <Newsfeed newsfeedItems={newsfeedItems} />;
}
