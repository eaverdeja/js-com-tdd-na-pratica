import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {
  search,
  searchByArtist,
  searchByAlbums,
  searchByTracks,
  searchByPlaylists,
} from '../src'

global.fetch = require('node-fetch')

chai.use(sinonChai)
let fetchStub
const mockPromise = returns => ({
  json: res => returns || res,
})

beforeEach(() => {
  fetchStub = sinon.stub(global, 'fetch').resolves(mockPromise())
})

afterEach(() => {
  fetchStub.restore()
})

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

        // Para satisfazer o check-coverage do nyc,
        // precisamos invocar cada método pelo
        // menos uma vez
        method()
      })
    })
  })

  describe('Busca genêrica', () => {
    it('Deve chamar o método search()', () => {
      const artists = search()
      expect(fetchStub).to.have.been.calledOnce
    })

    context('Passando apenas um tipo', () => {
      it('Deve utilizar a URL correta ao buscar', () => {
        const artist = search('King Crimson', 'artist')
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=artist',
        )

        const albums = search('King Crimson', 'album')
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=album',
        )
      })
    })

    context('Passando mais de um tipo', () => {
      it('Consegue buscar por artista e album ao mesmo tempo', () => {
        const artistAndAlbums = search('King Crimson', ['artist', 'album'])
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=artist,album',
        )
      })
    })

    it('Deve retornar os dados em JSON', async () => {
      fetchStub.resolves(mockPromise({body: 'json'}))
      const artist = await search('King Crimson', 'artist')
      expect(artist).to.eql({body: 'json'})
    })
  })
})
