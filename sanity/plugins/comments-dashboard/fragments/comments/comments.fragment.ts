import { q, Selection, TypeFromSelection } from 'groqd'

const commentsFragment = {
  target: q('context.notification').grab$({
    title: ['documentTitle', q.string()],
    url: q.string(),
    documentType: q.string(),
  }),
  status: q.union([q.literal('open'), q.literal('resolved')]),
  authorId: q.string(),
  message: q.contentBlocks(),
} satisfies Selection

type CommentsFragmentType = TypeFromSelection<typeof commentsFragment>

export { commentsFragment, type CommentsFragmentType }
