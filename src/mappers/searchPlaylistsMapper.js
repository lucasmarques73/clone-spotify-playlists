export default function searchPlaylistsMapper(playlists) {
  return playlists.items.map((playlist) => {
    return {
      id: playlist.id,
      name: playlist.name,
      cover: playlist.images[0].url,
      description: playlist.description,
      owner: playlist.owner.display_name
    }
  })
}
