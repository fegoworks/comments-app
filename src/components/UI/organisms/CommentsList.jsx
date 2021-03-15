import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Title from '<atoms>/Title'
import Comment from './Comment'

const CommentsList = ({commentsList}) => {
  return (
    <Fragment>
      <Title
        margin="1rem 0"
        color="white"
        display="inline-block"
      >
        Deadpool Discussion
      </Title>
      <CommentsList.Container>
        {commentsList?.map(comment => (
          <Comment key={comment.id} commentObject={ comment}/>
        ))}
      </CommentsList.Container>
    </Fragment>
  )
}

CommentsList.Container = styled.div`
  .outside_circle {
    position: absolute;
    left: -25px;
    top: 30px;
  }

  .comment_replies {
    border: #393e46 solid 2px;
    margin: 0 2rem 0 5rem;
    padding: 1rem 3rem;
    border-radius: 0.75rem;
    margin: 2rem;
    position: relative;
  }
`
CommentsList.defaultProps = {
  commentObject: [],
};

CommentsList.propTypes = {
  commentObject: PropTypes.array
}

export default CommentsList