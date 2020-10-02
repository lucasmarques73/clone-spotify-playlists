import { confirmCloneClickTrack } from 'analytics'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import * as S from './styled'

const ClonePlaylistModal = ({ isOpen, onClose, onConfirm, originalName }) => {
  const [playlistName, setPlaylistName] = useState('')

  useEffect(() => {
    setPlaylistName(originalName)
  }, [originalName])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="overlay-modal"
      className="modal"
    >
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()
          onConfirm(playlistName)
        }}
      >
        <S.Text>Qual o nome da sua nova playlist?</S.Text>
        <S.Input
          type="text"
          autoComplete="off"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <S.Button onClick={confirmCloneClickTrack}>Clonar</S.Button>
      </S.Form>
    </Modal>
  )
}

ClonePlaylistModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  originalName: PropTypes.string
}

export default ClonePlaylistModal
