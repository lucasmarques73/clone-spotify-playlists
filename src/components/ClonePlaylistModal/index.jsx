import PropTypes from 'prop-types'
import Modal from 'react-modal'

import * as S from './styled'

const ClonePlaylistModal = ({ isOpen, onClose, onConfirm }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    <S.ModalWrapper>
      <div>I am a modal. Use the first input to change the modal title.</div>
      <button onClick={onConfirm}>Clonar</button>
    </S.ModalWrapper>
  </Modal>
)

ClonePlaylistModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}

export default ClonePlaylistModal
