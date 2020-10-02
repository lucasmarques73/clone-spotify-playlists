import { thanksCloneClickTrack } from 'analytics'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import * as S from './styled'

const ThanksModal = ({ isOpen, onClose, playlistName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="overlay-modal"
      className="modal"
    >
      <S.Title>
        {`A playlist ${playlistName} já deve estar no seu spotify.`}
      </S.Title>
      <S.Info>Talvez você tenha que fechar e abrir o Spotify novamente.</S.Info>
      <S.Button
        type="button"
        onClick={() => {
          onClose()
          thanksCloneClickTrack()
        }}
      >
        Obrigado
      </S.Button>
    </Modal>
  )
}

ThanksModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  playlistName: PropTypes.string
}

export default ThanksModal
