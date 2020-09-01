import { useState } from 'react'
import Sidebar from 'components/Sidebar'
import * as S from './styled'

import SearchPlaylists from 'components/SearchPlaylists'
import PlaylistTracks from 'components/PlaylistTracks'

const Logged = () => {
  const [playlists, setPlaylists] = useState([])
  const [playlistSelected, setPlaylistSelected] = useState([])
  const [tracks, setTracks] = useState([])

  const goBack = () => {
    setTracks([])
  }

  return (
    <S.Wrapper>
      <Sidebar />
      <SearchPlaylists
        showSearch={tracks.length === 0}
        playlists={playlists}
        setPlaylists={setPlaylists}
        tracks={tracks}
        setTracks={setTracks}
        setPlaylistSelected={setPlaylistSelected}
      />
      <PlaylistTracks
        showTracks={tracks.length > 0}
        playlist={playlistSelected}
        tracks={tracks}
        goBack={goBack}
      />
    </S.Wrapper>
  )
}

export default Logged
