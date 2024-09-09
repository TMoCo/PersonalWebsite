import { PortfolioProjectPost } from './model/Post'

export interface State {
  porfolio?: PortfolioProjectPost[]
}

export type Action = {
  type: string
}

export const blogInitialiser = (): State => {
  return {}
}

export const blogReducer = (state: State, action: Action): State => {
  if (action.type) return state
  return state
}
