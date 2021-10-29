import mapper from '.'
describe('addTrackerMapper', () => {
  it('should return mapped tracker', () => {
    const tracksSelected = ['track1', 'track2']
    const tracksSelectedMapped = 'spotify:track:track1,spotify:track:track2'

    expect(mapper(tracksSelected)).toBe(tracksSelectedMapped)
  })
})
