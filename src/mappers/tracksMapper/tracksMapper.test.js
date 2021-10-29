import mapper from '.'
import { data } from './tracksMapper.fixture'
describe('tracksMapper', () => {
  it('should return mapped tracks', () => {
    const tracksMapped = [
      {
        id: '4iJyoBOLtHqaGxP12qzhQI',
        name: 'Peaches (feat. Daniel Caesar & Giveon)',
        artists: 'Justin Bieber, Daniel Caesar, Giveon',
        album: {
          cover:
            'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
          name: 'Justice'
        }
      },
      {
        id: '2plRom0urixt6BE8t7kOhQ',
        name: 'Girl From Rio',
        artists: 'Anitta',
        album: {
          cover:
            'https://i.scdn.co/image/ab67616d0000b27399f7b72649acea41c09f19f3',
          name: 'Girl From Rio'
        }
      }
    ]

    expect(mapper(data)).toStrictEqual(tracksMapped)
  })
})
