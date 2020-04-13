export async function getNewsfeed() {
  let response = await fetch(`/api/v0/demonewsitems/`);
  let data = await response.json();
  return data;
}
