import { useEffect, useState } from 'react'
import Logo from 'components/Logo'
import MyPlaylists from 'components/MyPlaylists'
import User from 'components/User'
import userMapper from 'mappers/userMapper'
import userPlaylistsMapper from 'mappers/userPlaylistsMapper'
import requestUserDataFromSpotify from 'services/requestUserDataFromSpotify'
import requestUserPlaylistsFromSpotity from 'services/requestUserPlaylistsFromSpotity'
import * as S from './styled'

const Sidebar = () => {
  const [user, setUser] = useState({})
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const runAsync = async () => {
      const userResponse = await requestUserDataFromSpotify()
      setUser(userMapper(userResponse))
    }

    runAsync()
  }, [])

  useEffect(() => {
    const runAsync = async () => {
      const playlistsResponse = await requestUserPlaylistsFromSpotity()
      setPlaylists(userPlaylistsMapper(playlistsResponse, user.id))
    }

    runAsync()
  }, [user])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Link href="/">
          <Logo />
          <S.Title>Clone Spotify Playlists</S.Title>
        </S.Link>
      </S.Header>
      <User name={user.name} avatar={user.avatar} />
      <MyPlaylists playlists={playlists} />
    </S.Wrapper>
  )
}

export default Sidebar
