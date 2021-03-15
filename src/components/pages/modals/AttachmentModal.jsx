import React from 'react'
import PropTypes from 'prop-types'

import Modal from '<atoms>/Modal'
import Image from '<atoms>/Image'

const AttachmentModal = props => {
  const { isOpen, username, title, image, onToggle } = props
  return (
    <Modal open={isOpen} username={username} title={title} handleClose={onToggle}>
      <Image imageUrl={image} altTitle={title} />
    </Modal>
  )
}

AttachmentModal.defaultProps = {
  isOpen: false
}

AttachmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  username: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  onToggle: PropTypes.func
}

export default AttachmentModal