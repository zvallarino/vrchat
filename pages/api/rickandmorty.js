export default async function handler(req, res) {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    res.status(200).json(data);
  }
  