import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Text from '<atoms>/Text'
import Image from '<atoms>/Image'
import Button from '<atoms>/Button'
import { textColors } from '<variables>/colorPalette'
import { fontWeight } from '<variables>/fonts'
import CommentAttachments from '<molecules>/CommentAttachments'
import CommentReplies from '<molecules>/CommentReplies'
import { getLocaleDate } from '../../../helpers/utils'

function renderReplies(replies) {
  return <CommentReplies replies={ replies}/>
}

function renderAttachments(attachments) {
  return <CommentAttachments attachments={attachments}/>
}

const Comment = ({commentObject}) => {
  const { comment, date_posted, user: { name, avatar_thumbnail_url} } = commentObject;
  return (
    <Fragment>
      <Comment.Container>
        <div className="comment_header">
          <h3>{name}</h3><span>- {getLocaleDate(date_posted)}</span>
        </div>
        <div className="outside_circle">
          <Image
            imageUrl={avatar_thumbnail_url}
            borderRadius="50%"
            width="md"
            border={`${textColors['primary']} solid 2px`}
          />
        </div>
        <Text
          color="secondary"
          fontSize="sm"
          fontWeight="light"
        >
          {comment}
        </Text>
        {commentObject?.attachments && renderAttachments(commentObject?.attachments)}
        <Button
          fontSize ={fontWeight['light']}
          textAlign="center"
          color="primary"
          display="block"
          fontWeight="light"
          padding="0.5rem"
          border={`solid 1px ${textColors['primary']}`} 
          background="none"
          borderRadius="0.5rem"
          margin="0.5rem 0"
          width="4rem"
        >
          Reply
        </Button>
      </Comment.Container>
      {commentObject?.replies && renderReplies(commentObject?.replies)}
    </Fragment>
  )
}

Comment.Container = styled.div`
  background-color: #393e46;
  padding: 0.5rem 3rem;
  border-radius: 0.75rem;
  margin: 0.75rem 5rem 0.75rem 0;
  position: relative;

  .comment_header, .reply_header {
    display: flex;
    align-items: center;

    h3 {
      color: ${textColors["white"]}
    }

    span {
      margin: 0 1rem;
      color: ${textColors['secondary']}
    }
  }
`
Comment.defaultProps = {
  commentObject: {},
};

Comment.propTypes = {
  commentObject: PropTypes.object
}

export default Comment