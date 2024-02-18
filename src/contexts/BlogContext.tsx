import { createContext } from 'react'
import { Action, State } from '../data/reducer'

export const BlogContext = createContext<State>({})
export const BlogDispatchContext = createContext<React.Dispatch<Action>>(() => {})
