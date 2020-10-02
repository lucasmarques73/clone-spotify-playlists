import { useState } from 'react'
import PropTypes from 'prop-types'
import PlaylistList from 'components/PlaylistList'

import * as S from './styled'
import { searchClickTrack } from 'analytics'

const SearchPlaylists = ({
  playlists,
  tracks,
  getTracksFromPlaylist,
  searchPlaylists,
  showSearch
}) => {
  const [query, setQuery] = useState('')

  return (
    showSearch && (
      <S.SearchWrapper
        onSubmit={(e) => {
          e.preventDefault()
          searchPlaylists(query)
        }}
      >
        <S.SearchForm>
          <S.SearchInput
            type="text"
            placeholder="Digite uma playlist"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.SearchButton onClick={() => searchClickTrack(query)}>
            Buscar
          </S.SearchButton>
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
  tracks: PropTypes.array,
  showSearch: PropTypes.bool,
  getTracksFromPlaylist: PropTypes.func,
  searchPlaylists: PropTypes.func
}

export default SearchPlaylists
