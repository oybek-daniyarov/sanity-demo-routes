import { Card, Code, Flex, Stack, Text } from '@sanity/ui'
import dynamic from 'next/dynamic'
import { Suspense, useMemo } from 'react'
import { useRouterState } from 'sanity/router'

import NotFound from '@/sanity/plugins/comments-dashboard/view/not-found'

import { ActionType, StateType, ViewType } from '../types'

const viewMap: Partial<Record<ViewType, Partial<Record<ActionType, any>>>> = {
  comment: {
    view: dynamic(() => import('./comments/comments-view')),
  },
  document: {
    view: dynamic(() => import('./documents/documents-view')),
  },
}

export default function MainView() {
  const state = useRouterState() as StateType

  const Component = useMemo(() => {
    return state.action ? viewMap[state.view]?.[state.action] : NotFound
  }, [state.view, state.action])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack space={4}>
        {Component ? <Component /> : <NotFound />}
        <Card
          style={{
            padding: '1rem',
            borderRadius: '2px',
            border: '1px solid #ccc',
          }}
        >
          <Flex align="center" gap={1}>
            <Text>Route state:</Text>
            <Code>{JSON.stringify(state)}</Code>
          </Flex>
        </Card>
      </Stack>
    </Suspense>
  )
}
