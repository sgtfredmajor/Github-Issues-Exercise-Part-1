export const loadData = async apiUrl => {
    const response = await fetch(apiUrl);
    const data = response.json();
    return data;
}