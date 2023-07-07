export default async function handler(req, res) {
    const username = 'DinosaurBlue';
    const password = 'Porno1001!';


    const response = await fetch('https://api.vrchat.cloud/api/1/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'vrchatweb/1.0 (zvcoding@gmail.com)'
        },
        body: JSON.stringify({ username, password })
      });
    const data = await response.json();
    res.status(200).json(data);
  }
  