import { ReducerActionMap } from '@/types'

export enum EActionsTypes {
  SET_POSITION = 'MOUSEFOLLOWER_SET_POSITION',
  SET_SIZE = 'MOUSEFOLLOWER_SET_SIZE',
}

export type MouseFollowerStatePosition = { x: number; y: number }
export type MouseFollowerStateSize = 'hide' | 'small' | 'normal' | 'big'

export type MouseFollowerPayload = {
  [EActionsTypes.SET_POSITION]: MouseFollowerStatePosition
  [EActionsTypes.SET_SIZE]: MouseFollowerStateSize
}

export type MouseFollowerActions = ReducerActionMap<MouseFollowerPayload>[keyof ReducerActionMap<MouseFollowerPayload>]
