import { Badge, Card, Flex, Heading, Stack } from '@sanity/ui'
import { useRouterState } from 'sanity/router'

import { useGetDocuments } from '@/sanity/plugins/comments-dashboard/hooks/api/use-documents'

import { StateType } from '../../types'

function DocumentsView() {
  const state = useRouterState() as StateType

  const { data } = useGetDocuments()

  return (
    <Stack space={4}>
      <Heading as="h1" size={5}>
        Documents
      </Heading>
      <Stack space={2}>
        {data?.map((item, index) => (
          <Card key={index} padding={2} radius={2} shadow={1}>
            <Flex align="center" gap={1} justify="space-between">
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '200px',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '200px',
                }}
              >
                fsfd
              </div>
              <Badge>{item._type}</Badge>
            </Flex>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}

export default DocumentsView
