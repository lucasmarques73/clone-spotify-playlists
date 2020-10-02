import ClonePlaylistModal from 'components/ClonePlaylistModal'
import PropTypes from 'prop-types'
import { useState } from 'react'
import * as S from './styled'

const PlaylistHead = ({ playlist, cantClonePlaylist, clonePlaylist }) => {
  const [openModal, setModalOpen] = useState(false)

  return (
    <>
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
        <S.Button
          disabled={!cantClonePlaylist}
          onClick={() => setModalOpen(true)}
        >
          Clonar Playlist
        </S.Button>
      </S.Wrapper>
      <ClonePlaylistModal
        isOpen={openModal}
        onClose={() => setModalOpen(false)}
        onConfirm={clonePlaylist}
        originalName={playlist.name}
      />
    </>
  )
}

PlaylistHead.propTypes = {
  playlist: PropTypes.object,
  cantClonePlaylist: PropTypes.bool,
  clonePlaylist: PropTypes.func
}

export default PlaylistHead
