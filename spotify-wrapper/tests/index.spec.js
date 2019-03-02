import {expect} from 'chai'
import {
  search,
  searchByArtist,
  searchByAlbums,
  searchByTracks,
  searchByPlaylists,
} from '../src'

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    const searchMethods = [
      search,
      searchByArtist,
      searchByAlbums,
      searchByTracks,
      searchByPlaylists,
    ]
    searchMethods.forEach((method) => {
      it(`Deve ter um método ${method.name}()`, () => {
        expect(method).to.exist
        expect(method).to.be.an.instanceOf(Function)
      })
    })
  })
})
