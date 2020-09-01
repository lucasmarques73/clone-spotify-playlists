import { useState } from 'react'
import Sidebar from 'components/Sidebar'
import * as S from './styled'

import SearchPlaylists from 'components/SearchPlaylists'
import PlaylistTracks from 'components/PlaylistTracks'

const Logged = () => {
  const [playlists, setPlaylists] = useState([])
  const [playlistSelected, setPlaylistSelected] = useState([])
  const [tracks, setTracks] = useState([])
  const [tracksSelected, setTracksSelected] = useState([])

  const goBack = () => {
    setTracks([])
  }

  const handleTrackClick = (trackId) => {
    if (tracksSelected.includes(trackId))
      setTracksSelected(tracksSelected.filter((id) => id !== trackId))
    else setTracksSelected([...tracksSelected, trackId])
  }

  const handleSelectAllTracks = () => {
    if (tracksSelected.length === tracks.length) setTracksSelected([])
    else setTracksSelected(tracks.map((track) => track.id))
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
        handleTrackClick={handleTrackClick}
        handleSelectAllTracks={handleSelectAllTracks}
        tracksSelected={tracksSelected}
      />
    </S.Wrapper>
  )
}

export default Logged
