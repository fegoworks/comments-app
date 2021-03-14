import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '<api>/api'

export const CommentsContext = React.createContext()
const GlobalContext = (props) => {
const [comments, getComments] = useState([])

  useEffect(
    () => {
      api
        .get('/comments')
        .then(response => getComments(response.data))
        .catch(err => console.log(err))
    },
    [comments.length]
  )

  return (
    <CommentsContext.Provider value={comments}>
      {props.children}
    </CommentsContext.Provider>
  )
}

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlobalContext