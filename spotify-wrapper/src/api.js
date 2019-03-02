require('dotenv').config()

const BASE_URL = 'https://api.spotify.com/v1'

export default async function search(query, type) {
  if (!query || !type) {
    return undefined
  }
  const url = encodeURI(`${BASE_URL}/search?q=${query}&type=${type}`)

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_API_KEY}`,
      },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    return 'Algo de errado ocorreu! 💥'
  }
}
