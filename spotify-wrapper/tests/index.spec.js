import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {
  search,
  searchByArtist,
  searchByAlbum,
  searchByTrack,
  searchByPlaylist,
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
      searchByAlbum,
      searchByTrack,
      searchByPlaylist,
    ]
    searchMethods.forEach((method) => {
      it(`Deve ter um método ${method.name}()`, () => {
        expect(method).to.exist
        expect(method).to.be.an.instanceOf(Function)
      })
    })
  })

  describe('Busca genêrica', () => {
    // developer.spotify.com/documentation/web-api/reference/search/search/
    it('Não deve chamar o método search() caso uma query e um tipo não sejam informados', () => {
      search()
      expect(fetchStub).to.not.have.been.called
    })

    it('Deve chamar o método search()', () => {
      search('King Crimson', 'artist')
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Deve delegar possíveis exceções no método search()', async () => {
      fetchStub.rejects({ error: 'Mock! 😈' })
      const result = await search('Kenny G', 'artist')
      expect(result).to.equal('Algo de errado ocorreu! 💥')
    })

    context('Passando apenas um tipo', () => {
      it('Deve utilizar a URL correta ao buscar', () => {
        search('King Crimson', 'artist')
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=artist',
        )

        search('King Crimson', 'album')
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=album',
        )
      })
    })

    context('Passando mais de um tipo', () => {
      it('Consegue buscar por artista e album ao mesmo tempo', () => {
        search('King Crimson', ['artist', 'album'])
        expect(fetchStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=King%20Crimson&type=artist,album',
        )
      })
    })

    it('Deve retornar os dados em JSON', async () => {
      fetchStub.resolves(mockPromise({ body: 'json' }))
      const artist = await search('King Crimson', 'artist')
      expect(artist).to.eql({ body: 'json' })
    })
  })

  describe('Busca por artisa', () => {
    it('Deve chamar o método searchByArtist()', () => {
      searchByArtist('Hermeto Pascoal')
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Deve utilizar a URL correta ao buscar', () => {
      searchByArtist('Hermeto Pascoal')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Hermeto%20Pascoal&type=artist',
      )

      searchByArtist('Yussef Dayes')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Yussef%20Dayes&type=artist',
      )
    })
  })

  describe('Busca por album', () => {
    it('Deve chamar o método searchByAlbum()', () => {
      searchByAlbum('Cérebro Magnético')
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Deve utilizar a URL correta ao buscar', () => {
      searchByAlbum('Slaves Mass')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Slaves%20Mass&type=album',
      )

      searchByAlbum('Black Focus')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Black%20Focus&type=album',
      )
    })
  })

  describe('Busca por track', () => {
    it('Deve chamar o método searchByTrack()', () => {
      searchByTrack('Arrasta Pé Alagoano')
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Deve utilizar a URL correta ao buscar', () => {
      searchByTrack('Chorinho para ele')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Chorinho%20para%20ele&type=track',
      )

      searchByTrack('Strings of Light')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Strings%20of%20Light&type=track',
      )
    })
  })

  describe('Busca por playlist', () => {
    it('Deve chamar o método searchByPlaylist()', () => {
      searchByPlaylist("verdeja's music")
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Deve utilizar a URL correta ao buscar', () => {
      searchByPlaylist('Choros, chorinhos e chorões')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Choros,%20chorinhos%20e%20chor%C3%B5es&type=playlist',
      )

      searchByPlaylist('Yussef Dayes: musical DNA and associated acts')
      expect(fetchStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Yussef%20Dayes:%20musical%20DNA%20and%20associated%20acts&type=playlist',
      )
    })
  })
})
