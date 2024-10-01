import { Card, Flex, Stack } from '@sanity/ui'
import { StateLink } from 'sanity/router'

import toRouteState from '@/sanity/plugins/comments-dashboard/utils/to-route-state'
import MainView from '@/sanity/plugins/comments-dashboard/view/main-view'

export default function CommentsDashboardTool() {
  return (
    <Flex padding={4}>
      <Card flex={1}>
        <Stack space={4}>
          <StateLink
            state={toRouteState({
              view: 'status',
            })}
          >
            Status
          </StateLink>
          <StateLink
            state={toRouteState({
              view: 'comment',
              action: 'view',
            })}
          >
            Comments
          </StateLink>
          <StateLink
            state={toRouteState({
              view: 'document',
              action: 'view',
              id: '123',
            })}
          >
            Documents
          </StateLink>
        </Stack>
      </Card>
      <Card flex={[6]} marginLeft={[2]}>
        <MainView />
      </Card>
    </Flex>
  )
}
