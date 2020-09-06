import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styled'

import Sidebar from 'components/Sidebar'
import SearchPlaylists from 'components/SearchPlaylists'
import PlaylistTracks from 'components/PlaylistTracks'
import requestCreateAPlaylistSpotify from 'services/requestCreateAPlaylistSpotify'
import requestAddTracksAPlaylistSpotify from 'services/requestAddTracksAPlaylistSpotify'
import requestUserDataFromSpotify from 'services/requestUserDataFromSpotify'
import requestSearchPlaylistsSpotify from 'services/requestSearchPlaylistsSpotify'
import requestTracksFromPlaylist from 'services/requestTracksFromPlaylist'
import requestUserPlaylistsFromSpotify from 'services/requestUserPlaylistsFromSpotify'
import searchPlaylistsMapper from 'mappers/searchPlaylistsMapper'
import addTracksMapper from 'mappers/addTracksMapper'
import userPlaylistsMapper from 'mappers/userPlaylistsMapper'
import tracksMapper from 'mappers/tracksMapper'
import userMapper from 'mappers/userMapper'

const Logged = ({ setHasError }) => {
  const router = useRouter()
  const [playlists, setPlaylists] = useState([])
  const [playlistSelected, setPlaylistSelected] = useState({})
  const [tracks, setTracks] = useState([])
  const [tracksSelected, setTracksSelected] = useState([])
  const [user, setUser] = useState({})
  const [userPlaylists, setUserPlaylists] = useState([])

  const handleError = useCallback(() => {
    setHasError(true)
    router.push('/')
  }, [router, setHasError])

  useEffect(() => {
    const runAsync = async () => {
      try {
        const userResponse = await requestUserDataFromSpotify()
        setUser(userMapper(userResponse))
      } catch (_) {
        handleError()
      }
    }

    runAsync()
  }, [handleError])

  useEffect(() => {
    const runAsync = async () => {
      try {
        const playlistsResponse = await requestUserPlaylistsFromSpotify()
        setUserPlaylists(userPlaylistsMapper(playlistsResponse, user.id))
      } catch (_) {
        handleError()
      }
    }

    runAsync()
  }, [user, handleError])

  const goBack = () => {
    setTracks([])
  }

  const searchPlaylists = async (query) => {
    try {
      const data = await requestSearchPlaylistsSpotify(query)
      setPlaylists(searchPlaylistsMapper(data.playlists))
      setTracks([])
    } catch (_) {
      handleError()
    }
  }

  const getTracksFromPlaylist = async (playlistId) => {
    try {
      setPlaylistSelected(
        playlists.filter((playlist) => playlistId === playlist.id)[0]
      )
      const data = await requestTracksFromPlaylist(playlistId)
      setTracks(tracksMapper(data))
    } catch (_) {
      handleError()
    }
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
    try {
      const { id, name } = await requestCreateAPlaylistSpotify(
        user.id,
        playlistSelected.name,
        playlistSelected.description
      )
      await requestAddTracksAPlaylistSpotify(
        id,
        addTracksMapper(tracksSelected)
      )
      setUserPlaylists([...userPlaylists, { id, name }])
    } catch (_) {
      handleError()
    }
  }

  return (
    <S.Wrapper>
      <Sidebar user={user} userPlaylists={userPlaylists} />
      <SearchPlaylists
        showSearch={tracks.length === 0}
        playlists={playlists}
        tracks={tracks}
        searchPlaylists={searchPlaylists}
        getTracksFromPlaylist={getTracksFromPlaylist}
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

Logged.propTypes = {
  setHasError: PropTypes.func
}

export default Logged
