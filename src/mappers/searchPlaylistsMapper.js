export default function searchPlaylistsMapper(playlists) {
  return playlists.items
    .filter((playlist) => playlist.tracks.total > 0)
    .map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
      cover: playlist.images[0].url,
      description: playlist.description,
      owner: playlist.owner.display_name
    }))
}
