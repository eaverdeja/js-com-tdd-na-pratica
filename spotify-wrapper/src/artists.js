import search from './api'

export default async function searchByAlbum(query) {
  return search(query, 'artist')
}
