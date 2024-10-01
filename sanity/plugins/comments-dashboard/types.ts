type ViewType = 'status' | 'comment' | 'document' | 'notification'
type ActionType = 'create' | 'view' | 'edit'

type StateType = {
  action?: ActionType
  id?: string
  view: ViewType
}

export { type ActionType, type StateType, type ViewType }
