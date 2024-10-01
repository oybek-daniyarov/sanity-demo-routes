import useSWR from 'swr'

import { CommentsFragmentType } from '@/sanity/plugins/comments-dashboard/fragments/comments/comments.fragment'
import { getComments } from '@/sanity/plugins/comments-dashboard/hooks/api/api'

const useComments = () => {
  return useSWR<CommentsFragmentType[]>('comments', getComments)
}

export { useComments }
