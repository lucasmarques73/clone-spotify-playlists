import PropTypes from 'prop-types'
import * as S from './styled'

const PlaylistHead = ({ playlist, cantClonePlaylist, clonePlaylist }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <S.Cover src={playlist.cover} />
        <S.Info>
          <S.Name>{playlist.name}</S.Name>
          {playlist.description && (
            <S.Description>
              <S.Bold>Descrição:</S.Bold> {playlist.description}
            </S.Description>
          )}
          <S.Owner>
            <S.Bold>Criador:</S.Bold> {playlist.owner}
          </S.Owner>
        </S.Info>
      </S.Item>
      <S.Button disabled={!cantClonePlaylist} onClick={clonePlaylist}>
        Clonar Playlist
      </S.Button>
    </S.Wrapper>
  )
}

PlaylistHead.propTypes = {
  playlist: PropTypes.object,
  cantClonePlaylist: PropTypes.bool,
  clonePlaylist: PropTypes.func
}

export default PlaylistHead
