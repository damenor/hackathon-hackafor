import { FC, ReactNode, ReducerWithoutAction, useEffect, useReducer } from 'react'

import { MouseFollower } from './MouseFollower'
import { INITIAL_STATE, MouseFollowerContext, MouseFollowerState } from './MouseFollowerContext'

import { EActionsTypes, MouseFollowerActions, MouseFollowerStatePosition, MouseFollowerStateSize } from './MouseFollowerContextTypes'

type MouseFollowerProviderProps = {
  children: ReactNode
}

const reducer = (state: MouseFollowerState, action: MouseFollowerActions): MouseFollowerState => {
  if(action.type === EActionsTypes.SET_POSITION) return { ...state, position: action.payload }
  if(action.type === EActionsTypes.SET_SIZE) return { ...state, size: action.payload }
  return state
}

export const MouseFollowerProvider: FC<MouseFollowerProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const setPosition = (payload: MouseFollowerStatePosition) => dispatch({ type: EActionsTypes.SET_POSITION, payload })

  const setSize =  (payload: MouseFollowerStateSize) => dispatch({ type: EActionsTypes.SET_SIZE, payload })

  const value = { ...state, setSize }

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <MouseFollowerContext.Provider value={value}>
      <MouseFollower />
      { children }
    </MouseFollowerContext.Provider>
  )

}


