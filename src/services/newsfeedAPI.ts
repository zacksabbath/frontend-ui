export async function getNewsfeed() {
    let response = await fetch(`http://localhost:8000/api/v0/frontend/`);
    let data = await response.json();
    return data;
};
