export default async function handler(req, res) {
    // const username = 'DinosaurBlue';
    // const password = 'Porno1001!';


    const authResponse = await fetch('https://api.vrchat.cloud/api/1/auth/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'vrchatweb/1.0 (zvcoding@gmail.com)'
        },
        body: JSON.stringify({ username, password })
      });

      console.log(authResponse.status);
      const responseBody = await authResponse.text();
   
    // const authToken = authResponse.headers.get('set-cookie').split(';')[0];

    res.status(200).json(responseBody);
  }