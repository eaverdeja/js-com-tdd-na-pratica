const BASE_URL = 'https://api.spotify.com/v1'

export const search = (query, type) => {
  const url = encodeURI(`${BASE_URL}/search?q=${query}&type=${type}`)
  const searchResults = []
  searchResults.push(fetch(url))
  return searchResults
}

export const searchByArtist = () => ({})
export const searchByAlbums = () => ({})
export const searchByTracks = () => ({})
export const searchByPlaylists = () => ({})
