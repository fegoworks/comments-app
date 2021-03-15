import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import Text from '<atoms>/Text'
import Image from '<atoms>/Image'
import { textColors } from '<variables>/colorPalette'

const CommentReply = ({reply}) => {
  return (
    <Fragment>
      <div className="reply_header">
        <h3>{reply?.user?.name}</h3><span>- {reply?.user?.date_posted}</span>
      </div>
      <div className="outside_circle">
        <Image
          imageUrl={reply?.user?.avatar_thumbnail_url}
          altTitle={reply?.user?.name}
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
        {reply?.comment}
      </Text>
    </Fragment>
  )
}

const CommentReplies = ({replies}) => (
  replies.map((reply) => (
    <div className="comment_replies">
    <CommentReply key={reply.id} reply={reply} />
    </div>
  ))
)

CommentReplies.defaultProps = {
  replies: [],
};

CommentReplies.propTypes = {
  replies: PropTypes.array
};

export default CommentReplies;