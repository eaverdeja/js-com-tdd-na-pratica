import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import {
  search,
  searchByArtist,
  searchByAlbums,
  searchByTracks,
  searchByPlaylists,
} from '../src'

global.fetch = require('node-fetch')

chai.use(sinonChai)
sinonStubPromise(sinon)
let fetchStub

beforeEach(() => {
  fetchStub = sinon.stub(global, 'fetch')
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

    it('Deve utilizar a URL correta ao buscar', () => {
      const artists = search('King Crimson', 'artist')

      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=King%20Crimson&type=artist',
      )
    })
  })
})
