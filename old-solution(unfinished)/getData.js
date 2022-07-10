async function getData() {
    const response = await fetch(
      `https://chess-tournament-api.devtest.ge/api/grandmasters`,
      { mode: 'cors' },
    );
    const data = await response.json();
    return data;
}

export default getData