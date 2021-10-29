// spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M

export default function addTracksMapper(tracksSelected) {
  return tracksSelected.map((trackId) => `spotify:track:${trackId}`).join(',')
}
