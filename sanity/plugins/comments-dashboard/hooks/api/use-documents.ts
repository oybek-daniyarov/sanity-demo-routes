import useSWR from 'swr'

import { DocumentsFragmentType } from '@/sanity/plugins/comments-dashboard/fragments/documents/documents.fragment'
import { getDraftDocuments } from '@/sanity/plugins/comments-dashboard/hooks/api/api'

const useGetDocuments = () => {
  return useSWR<DocumentsFragmentType[]>('documents-draft', getDraftDocuments)
}

export { useGetDocuments }
