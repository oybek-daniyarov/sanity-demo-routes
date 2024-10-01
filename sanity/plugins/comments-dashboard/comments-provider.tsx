import React, { createContext } from 'react'

interface ContextState {}

// Create the context
export const CommentsContext = createContext<ContextState>({})

// Create the provider
export const CommentsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <CommentsContext.Provider value={{}}>{children}</CommentsContext.Provider>
  )
}

// Create the consumer
export const useComments = () => {
  const context = React.useContext(CommentsContext)
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsProvider')
  }
  return context
}
