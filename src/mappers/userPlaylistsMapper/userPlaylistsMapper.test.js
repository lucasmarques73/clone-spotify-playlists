import mapper from '.'
import { playlists, owner } from './userPlaylistsMapper.fixture'
describe('userPlaylistsMapper', () => {
  it('should return mapped users playlist', () => {
    const userPlaylistMapped = [
      {
        id: '6Gxo1Qyhb6T1Vxji02bMO5',
        name: 'funkzera',
        cover:
          'https://mosaic.scdn.co/640/ab67616d0000b2738623c4786db067245a833484ab67616d0000b273966a62685ed4f112636fca06ab67616d0000b273a306b7ef42533d98d948b7abab67616d0000b273d1389b7531858f52f09e276b'
      },
      {
        id: '2tqixwuQBLAeVgWFSovoBL',
        name: 'Zaaph0d',
        cover:
          'https://mosaic.scdn.co/640/ab67616d0000b27316f7ba31754ea8368bf63186ab67616d0000b2731e9a057052d59004caf47e22ab67616d0000b273604f8ac39f15d287e251f193ab67616d0000b2737f9e5fda879c2f5c95a4f771'
      }
    ]

    expect(mapper(playlists, owner)).toStrictEqual(userPlaylistMapped)
  })
})
