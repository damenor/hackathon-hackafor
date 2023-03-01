import { Dispatch } from 'react'

export type ReducerActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key
  } : {
    type: Key
    payload: M[Key]
  }
}

export type DispatchArgs<T> = {
  dispatch: Dispatch<T>
}
