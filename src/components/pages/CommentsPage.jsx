import React, {useContext} from 'react'
import CommentsList from '<organisms>/CommentsList'
import PageTemplate from '<templates>/PageTemplate'
import ReactLoading from 'react-loading'
import {CommentsContext} from '../../state/GlobalContext'


const CommentsPage = () => {
  const {comments, loading, error} = useContext(CommentsContext)
  let pageContent
  if (error) {
    pageContent = <h2>{error.toString()}</h2>
  } else if (loading) {
    pageContent = <ReactLoading type='spinningBubbles' color="#b19cd9" height={667} width={375}/>
  } else if (!loading && comments) {
    pageContent =
    (<CommentsList commentsList = {comments} />)
  }
  return (
    <PageTemplate>
      {pageContent}
    </PageTemplate>
  )
}

export default CommentsPage