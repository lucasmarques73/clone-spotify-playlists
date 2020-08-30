import { useState } from 'react'
import Sidebar from 'components/Sidebar'
import * as S from './styled'
import requestSearchPlaylistsSpotify from 'services/requestSearchPlaylistsSpotify'
import requestTracksFromPlaylist from 'services/requestTracksFromPlaylist'

const Logged = () => {
  const [query, setQuery] = useState('')
  const [playlists, setPlaylists] = useState([])
  const [tracks, setTracks] = useState([])

  const seachPlaylists = async (e) => {
    e.preventDefault()
    const data = await requestSearchPlaylistsSpotify(query)
    setPlaylists(data.playlists.items)
  }

  const getTracksFromPlaylist = async (playlistId) => {
    const data = await requestTracksFromPlaylist(playlistId)
    setTracks(data.items)
  }

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
        <ul>
          {playlists.map((playlist) => (
            <li
              key={playlist.id}
              onClick={() => getTracksFromPlaylist(playlist.id)}
            >
              {playlist.id} - {playlist.name}
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {tracks.map(({ track }) => (
            <li key={track.id}>
              <p>
                {track.id} - {track.name} - {track.album.name}
              </p>
              <p>
                {
                  track.artists.reduce((a, b) => ({
                    name: `${a.name}, ${b.name}`
                  })).name
                }
              </p>
            </li>
          ))}
        </ul>
      </S.SearchWrapper>
    </S.Wrapper>
  )
}

export default Logged
