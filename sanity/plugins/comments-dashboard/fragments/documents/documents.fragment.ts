import { q, Selection, TypeFromSelection } from 'groqd'

const documentsFragment = {
  title: q.string(),
  _type: q.string(),
} satisfies Selection

type DocumentsFragmentType = TypeFromSelection<typeof documentsFragment>

export { documentsFragment, type DocumentsFragmentType }
