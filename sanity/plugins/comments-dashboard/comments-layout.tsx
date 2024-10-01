import { ReactNode } from 'react'
import { LayoutProps } from 'sanity'

import { CommentsProvider } from './comments-provider'

type Props = {
  children: ReactNode
}
export default function CommentsLayout(props: LayoutProps) {
  return (
    <CommentsProvider>{props.renderDefault({ ...props })}</CommentsProvider>
  )
}
