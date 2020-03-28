export async function getNewsfeed() {
    let response = await fetch(`http://stump.zackrose.net/api/`);
    let data = await response.json();
    return data;
};