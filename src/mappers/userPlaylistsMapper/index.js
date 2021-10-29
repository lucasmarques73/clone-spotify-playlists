export default function userPlaylistsMapper(playlists, owner) {
  return playlists.items
    .filter((playlist) => owner === playlist.owner.id)
    .map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
      cover: playlist.images[0].url
    }))
}
