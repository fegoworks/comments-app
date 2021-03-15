import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')
class Modal extends React.Component {
  render () {
    const { children, handleClose, open } = this.props
    return ReactDOM.createPortal(
      <Modal.Container open={open} onClick={handleClose}>
        <Modal.Backdrop onClick={handleClose} />
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal.Container>, modalRoot)
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  open: PropTypes.bool,
}

Modal.Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 102;
  `
Modal.Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

Modal.Body = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.85rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background: white;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 101;
`
export default Modal