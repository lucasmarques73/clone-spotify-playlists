import PropTypes from 'prop-types'
import * as S from './styled'

const coverDefault = '/img/spotify.png'

const MyPlaylists = ({ playlists }) => {
  return (
    <S.Wrapper>
      <S.Title>Minhas Playlists</S.Title>
      <S.List>
        {playlists &&
          playlists.map((playlist) => (
            <S.Item key={playlist.id}>
              <S.Cover src={playlist.cover ? playlist.cover : coverDefault} />
              <S.Name>{playlist.name}</S.Name>
            </S.Item>
          ))}
      </S.List>
    </S.Wrapper>
  )
}

MyPlaylists.propTypes = {
  playlists: PropTypes.array
}

export default MyPlaylists
