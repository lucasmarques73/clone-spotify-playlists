import { useState } from 'react'
import PropTypes from 'prop-types'
import PlaylistList from 'components/PlaylistList'
import requestSearchPlaylistsSpotify from 'services/requestSearchPlaylistsSpotify'
import requestTracksFromPlaylist from 'services/requestTracksFromPlaylist'
import searchPlaylistsMapper from 'mappers/searchPlaylistsMapper'
import tracksMapper from 'mappers/tracksMapper'
import * as S from './styled'

const SearchPlaylists = ({
  playlists,
  setPlaylists,
  tracks,
  setTracks,
  setPlaylistSelected,
  showSearch
}) => {
  const [query, setQuery] = useState('')

  const seachPlaylists = async (e) => {
    e.preventDefault()
    const data = await requestSearchPlaylistsSpotify(query)
    setPlaylists(searchPlaylistsMapper(data.playlists))
    setTracks([])
  }

  const getTracksFromPlaylist = async (playlistId) => {
    setPlaylistSelected(
      playlists.filter((playlist) => playlistId === playlist.id)[0]
    )
    const data = await requestTracksFromPlaylist(playlistId)
    setTracks(tracksMapper(data))
  }

  return (
    showSearch && (
      <S.SearchWrapper onSubmit={seachPlaylists}>
        <S.SearchForm>
          <S.SearchInput
            type="text"
            placeholder="Digite uma playlist"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.SearchButton>Buscar</S.SearchButton>
        </S.SearchForm>
        {tracks.length === 0 && (
          <PlaylistList
            playlists={playlists}
            onPlaylistClick={getTracksFromPlaylist}
          />
        )}
      </S.SearchWrapper>
    )
  )
}

SearchPlaylists.propTypes = {
  playlists: PropTypes.array,
  setPlaylists: PropTypes.func,
  tracks: PropTypes.array,
  setTracks: PropTypes.func,
  setPlaylistSelected: PropTypes.func,
  showSearch: PropTypes.bool
}

export default SearchPlaylists
