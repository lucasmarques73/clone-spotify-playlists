import { useState } from 'react'
import Sidebar from 'components/Sidebar'
import * as S from './styled'
import requestSearchPlaylistsSpotify from 'services/requestSearchPlaylistsSpotify'
// import requestTracksFromPlaylist from 'services/requestTracksFromPlaylist'
import SearchPlaylists from 'components/SearchPlaylists'
import searchPlaylistsMapper from 'mappers/searchPlaylistsMapper'

const Logged = () => {
  const [query, setQuery] = useState('')
  const [playlists, setPlaylists] = useState([])
  // const [tracks, setTracks] = useState([])

  const seachPlaylists = async (e) => {
    e.preventDefault()
    const data = await requestSearchPlaylistsSpotify(query)
    setPlaylists(searchPlaylistsMapper(data.playlists))
  }

  // const getTracksFromPlaylist = async (playlistId) => {
  //   const data = await requestTracksFromPlaylist(playlistId)
  //   setTracks(data.items)
  // }

  return (
    <S.Wrapper>
      <Sidebar />
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
        <SearchPlaylists playlists={playlists} />
      </S.SearchWrapper>
    </S.Wrapper>
  )
}

export default Logged
