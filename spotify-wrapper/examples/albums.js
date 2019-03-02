import { searchByAlbum } from '../src'

global.fetch = require('node-fetch')

searchByAlbum('Red').then(({ albums }) => {
  const printItem = item => console.log(JSON.stringify(item, null, 3))
  albums.items.forEach(printItem)
})
