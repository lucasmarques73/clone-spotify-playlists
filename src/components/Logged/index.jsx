import { useEffect, useState } from 'react'
import * as S from './styled'

import Sidebar from 'components/Sidebar'
import SearchPlaylists from 'components/SearchPlaylists'
import PlaylistTracks from 'components/PlaylistTracks'
import requestCreateAPlaylistSpotify from 'services/requestCreateAPlaylistSpotify'
import requestAddTracksAPlaylistSpotify from 'services/requestAddTracksAPlaylistSpotify'
import addTracksMapper from 'mappers/addTracksMapper'
import userPlaylistsMapper from 'mappers/userPlaylistsMapper'
import requestUserDataFromSpotify from 'services/requestUserDataFromSpotify'
import userMapper from 'mappers/userMapper'
import requestUserPlaylistsFromSpotify from 'services/requestUserPlaylistsFromSpotify'

const Logged = () => {
  const [playlists, setPlaylists] = useState([])
  const [playlistSelected, setPlaylistSelected] = useState({})
  const [tracks, setTracks] = useState([])
  const [tracksSelected, setTracksSelected] = useState([])
  const [user, setUser] = useState({})
  const [userPlaylists, setUserPlaylists] = useState([])

  useEffect(() => {
    const runAsync = async () => {
      const userResponse = await requestUserDataFromSpotify()
      setUser(userMapper(userResponse))
    }

    runAsync()
  }, [])

  useEffect(() => {
    const runAsync = async () => {
      const playlistsResponse = await requestUserPlaylistsFromSpotify()
      setUserPlaylists(userPlaylistsMapper(playlistsResponse, user.id))
    }

    runAsync()
  }, [user])

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

  const clonePlaylist = async () => {
    const { id, name } = await requestCreateAPlaylistSpotify(
      user.id,
      playlistSelected.name,
      playlistSelected.description
    )
    await requestAddTracksAPlaylistSpotify(id, addTracksMapper(tracksSelected))
    setUserPlaylists([...userPlaylists, { id, name }])
  }

  return (
    <S.Wrapper>
      <Sidebar user={user} userPlaylists={userPlaylists} />
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
        clonePlaylist={clonePlaylist}
      />
    </S.Wrapper>
  )
}

export default Logged
