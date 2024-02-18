export interface State {}

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
