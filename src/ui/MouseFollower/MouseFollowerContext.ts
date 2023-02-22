import { createContext } from 'react'

import { MouseFollowerStatePosition, MouseFollowerStateSize } from './MouseFollowerContextTypes'

export type MouseFollowerState = {
  position: MouseFollowerStatePosition
  size: MouseFollowerStateSize
  setSize: (size: MouseFollowerStateSize) => void
}

export const INITIAL_STATE: MouseFollowerState = {
  position: { x: -200, y: -200 },
  size: 'normal',
  setSize: size => {},
}

export const MouseFollowerContext = createContext<MouseFollowerState>(INITIAL_STATE)
