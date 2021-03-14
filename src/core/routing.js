import CommentsPage from '<pages>/CommentsPage'
import RepliesPage from '<pages>/RepliesPage'

const routes = {
  default: [
    {
      exact: true,
      path: '/',
      component: CommentsPage
    },
    {
      path: '/:commentId/replies',
      component: RepliesPage
    }
  ]
}
export default routes