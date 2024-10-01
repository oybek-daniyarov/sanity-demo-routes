import { ActionType, ViewType } from '../types'

const toRouteState = ({
  action,
  id,
  view,
}: {
  action?: ActionType
  id?: string
  view: ViewType
}) => {
  return {
    view,
    ...(action && { action }),
    ...(id && { id }),
  }
}

export default toRouteState
