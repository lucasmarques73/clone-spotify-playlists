import PropTypes from 'prop-types'
import * as S from './styled'

const MyPlaylists = ({ playlists }) => {
  return (
    <S.Wrapper>
      <S.Title>Minhas Playlists</S.Title>
      <S.PlaylistList>
        {playlists &&
          playlists.map((playlist) => (
            <S.PlaylistItem key={playlist.id}>
              <S.Cover src={playlist.cover} />
              <S.Name>{playlist.name}</S.Name>
            </S.PlaylistItem>
          ))}
      </S.PlaylistList>
    </S.Wrapper>
  )
}

MyPlaylists.propTypes = {
  playlists: PropTypes.array
}

export default MyPlaylists
