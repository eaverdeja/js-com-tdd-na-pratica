const BASE_URL = 'https://api.spotify.com/v1'

export const search = async (query, type) => {
  const url = query && type ? encodeURI(`${BASE_URL}/search?q=${query}&type=${type}`) : BASE_URL

  try {
    const res = await fetch(url)
    return await res.json()
  } catch (ex) {
    console.log(ex)
  }

  return undefined
}

export const searchByArtist = () => ({})
export const searchByAlbums = () => ({})
export const searchByTracks = () => ({})
export const searchByPlaylists = () => ({})
