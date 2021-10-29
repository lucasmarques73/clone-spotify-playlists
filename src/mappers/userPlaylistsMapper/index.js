export default function userPlaylistsMapper(playlists, owner) {
  return playlists.items
    .filter((playlist) => owner === playlist.owner.id)
    .map((playlist) => {
      return {
        id: playlist.id,
        name: playlist.name,
        cover: playlist.images[0].url
      }
    })
}
