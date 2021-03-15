import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '<api>/api'

export const CommentsContext = React.createContext()
const GlobalContext = (props) => {
  const [comments, getComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  
  useEffect(
    () => {
      setLoading(true)
      api
        .get('/comments')
        .then(response => getComments(response?.data?.items))
        .catch(err => setError(err))
      setLoading(false)
    },
    [comments.length]
  )

  const value = {comments, loading, error}
  
  return (
    <CommentsContext.Provider value={ value}>
      {props.children}
    </CommentsContext.Provider>
  )
}

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlobalContext