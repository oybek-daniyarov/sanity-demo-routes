import { Badge, Card, Flex, Heading, Stack } from '@sanity/ui'
import { useRouterState } from 'sanity/router'

import { useComments } from '@/sanity/plugins/comments-dashboard/hooks/api/use-comments'

import { StateType } from '../../types'

function CommentsView() {
  const state = useRouterState() as StateType

  const { data } = useComments()

  return (
    <Stack space={4}>
      <Heading as="h1" size={5}>
        Comments
      </Heading>
      <Stack space={2}>
        {data?.map((comment, index) => (
          <Card key={index} padding={2} radius={2} shadow={1}>
            <Flex align="center" gap={1} justify="space-between">
              <div>{comment.target.title}</div>
              <div>
                <Badge
                  tone={comment.status === 'resolved' ? 'positive' : 'primary'}
                >
                  {comment.status === 'resolved' ? 'Close' : 'Open'}
                </Badge>
              </div>
              <div>{comment.message?.length}</div>
            </Flex>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}

export default CommentsView
