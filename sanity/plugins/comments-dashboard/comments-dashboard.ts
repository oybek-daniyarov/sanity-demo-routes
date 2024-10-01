import { definePlugin } from 'sanity'
import { route } from 'sanity/router'

import CommentsDashboardTool from './comments-dashboard-tool'
import CommentsLayout from './comments-layout'
import { DashboardRoutes } from './constants'

const commentsDashboardTool = () => {
  return {
    title: 'Comments',
    name: 'comments-tool',
    component: () => CommentsDashboardTool(),
    router: route.create('/', [
      ...Object.values(DashboardRoutes).map((item) => route.create(item)),
    ]),
  }
}

const commentsDashboard = definePlugin({
  studio: {
    components: {
      layout: CommentsLayout,
    },
  },
  name: 'comments-dashboard-plugin',
  tools: [commentsDashboardTool()],
})

export { commentsDashboard }
