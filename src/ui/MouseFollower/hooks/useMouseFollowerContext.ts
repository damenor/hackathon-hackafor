import { useContext } from 'react'

import { MouseFollowerContext } from '../MouseFollowerContext'

export const useMouseFollowerContext = () => {
  const context = useContext(MouseFollowerContext)
  if (!context) throw new Error('useMouseFollowerContext - MouseFollowerContext not implemented')
  return context
}
