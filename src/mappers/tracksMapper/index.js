export default function tracksMapper(tracks) {
  return tracks.items.map(({ track }) => {
    return {
      id: track.id,
      name: track.name,
      artists: track.artists.reduce((a, b) => ({
        name: `${a.name}, ${b.name}`
      })).name,
      album: {
        cover: track.album.images[0].url,
        name: track.album.name
      }
    }
  })
}
