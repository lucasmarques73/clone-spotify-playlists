import Modal from 'react-modal'
import PropTypes from 'prop-types'

const ClonePlaylistModal = ({ isOpen, onClonePlaylist }) => (
  <Modal isOpen={isOpen} onClose>
    <div>I am a modal. Use the first input to change the modal title.</div>
    <button onClick={onClonePlaylist}>Clonar</button>
  </Modal>
)

ClonePlaylistModal.propTypes = {
  isOpen: PropTypes.bool,
  onClonePlaylist: PropTypes.func
}

export default ClonePlaylistModal
