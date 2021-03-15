import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Image from '<atoms>/Image'
import { textColors } from '<variables>/colorPalette'
import useModal from '<state>/hooks/useModal'
import AttachmentModal from '<pages>/modals/AttachmentModal'

const CommentAttachments = ({attachments}) => {
  const photoModal = useModal(false)

  const [ image, setImage ] = useState()

  const handleClick = (url) => {
    setImage(url)
    photoModal.setIsOpen(true)
  }

  return (
    <CommentAttachments.Wrapper>
      {attachments?.map((file) => (
        <Fragment>
          <Image
            onClick={() => handleClick(file?.standard?.url)}
            imageUrl={file?.standard?.url}
            width="100%"
            border={`${textColors['primary']} solid 2px`}
          />
          <AttachmentModal
            isOpen={photoModal.isOpen}
            image={image}
            onToggle={photoModal.onToggle}
          />
        </Fragment>
      ))}
    </CommentAttachments.Wrapper>
  )
}

CommentAttachments.Wrapper = styled.div`
  display: grid;
  margin: 0.75rem 0;
  border-radius: 0.75;
  grid-auto-columns:1fr;
  grid-gap: 0.25rem;

  &> :nth-child(2) {
    grid-column:2;
  }

  &>:nth-last-child(5)~:nth-child(3),
  &>:nth-last-child(7)~:nth-child(3), 
  &>:nth-last-child(9)~:nth-child(3){ 
    grid-column:3;
  }

  &>:nth-last-child(10)~:nth-child(4),
  &>:nth-last-child(13)~:nth-child(4), 
  &>:nth-last-child(16)~:nth-child(4){ 
    grid-column:4;
  }

  &>:nth-last-child(17)~:nth-child(5),
  &>:nth-last-child(21)~:nth-child(5),
  &>:nth-last-child(25)~:nth-child(5){ 
    grid-column:5;
  }
`

CommentAttachments.defaultProps = {
  attachments: [],
};

CommentAttachments.propTypes = {
  attachments: PropTypes.array
};

export default CommentAttachments;