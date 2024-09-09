import React, { PropsWithChildren } from 'react'
import { createContext } from 'react'
import { Action, State } from '../data/reducer'

export const BlogContext = createContext<State>({})
export const BlogDispatchContext = createContext<React.Dispatch<Action>>(() => {})

export const BlogContextProvider = ({ porfolio, children }: PropsWithChildren<State>) => {
  return <BlogContext.Provider value={{ porfolio }}>{children}</BlogContext.Provider>
}
