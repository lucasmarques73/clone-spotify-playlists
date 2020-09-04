import { useState } from 'react'
import PropTypes from 'prop-types'
import PlaylistList from 'components/PlaylistList'

import * as S from './styled'

const SearchPlaylists = ({
  playlists,
  tracks,
  getTracksFromPlaylist,
  seachPlaylists,
  showSearch
}) => {
  const [query, setQuery] = useState('')

  return (
    showSearch && (
      <S.SearchWrapper
        onSubmit={(e) => {
          e.preventDefault()
          seachPlaylists(query)
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
  tracks: PropTypes.array,
  showSearch: PropTypes.bool,
  getTracksFromPlaylist: PropTypes.func,
  seachPlaylists: PropTypes.func
}

export default SearchPlaylists
