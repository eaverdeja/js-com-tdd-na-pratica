const BASE_URL = 'https://api.spotify.com/v1'

export const search = async (query, type) => {
  if (!query || !type) {
    return undefined
  }
  const url = encodeURI(`${BASE_URL}/search?q=${query}&type=${type}`)

  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
    return 'Algo de errado ocorreu! 💥'
  }
}

export const searchByArtist = async query => search(query, 'artist')
export const searchByAlbum = async query => search(query, 'album')
export const searchByTrack = async query => search(query, 'track')
export const searchByPlaylist = async query => search(query, 'playlist')
