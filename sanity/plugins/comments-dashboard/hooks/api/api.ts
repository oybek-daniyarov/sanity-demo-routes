import { q } from 'groqd'
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '@/sanity/lib/api'
import {
  commentsFragment,
  CommentsFragmentType,
} from '@/sanity/plugins/comments-dashboard/fragments/comments/comments.fragment'
import {
  documentsFragment,
  DocumentsFragmentType,
} from '@/sanity/plugins/comments-dashboard/fragments/documents/documents.fragment'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
  withCredentials: true,
})

const commentsClient = client.withConfig({
  dataset: 'production-comments',
})

function getComments() {
  const query = q('*[_type=="comment"]').filter().grab$(commentsFragment)
  return commentsClient.fetch<CommentsFragmentType[]>(query.query)
}

function getDraftDocuments() {
  const query = q(
    '*[_type in ["page", "project"] && _id match "drafts.*"]',
  ).grab$(documentsFragment)
  console.log(query.query)
  return client.fetch<DocumentsFragmentType[]>(query.query)
}

export { getComments, getDraftDocuments }
