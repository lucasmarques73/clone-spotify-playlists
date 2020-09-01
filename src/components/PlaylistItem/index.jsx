import PropTypes from 'prop-types'
import * as S from './styled'

const PlaylistItem = ({ playlist, onPlaylistClick }) => {
  return (
    <S.Item onClick={() => onPlaylistClick(playlist.id)}>
      <S.CoverWrapper>
        <S.Cover src={playlist.cover} />
      </S.CoverWrapper>
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
  )
}

PlaylistItem.propTypes = {
  playlist: PropTypes.object,
  onPlaylistClick: PropTypes.func
}

export default PlaylistItem
