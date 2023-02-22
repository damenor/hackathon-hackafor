import { useMouseFollowerContext } from './useMouseFollowerContext'

export const useMouseFollowerMethods = () => {
  const { setSize } = useMouseFollowerContext()
  return {
    onClick: () => setSize('normal'),
    onMouseOver: () => setSize('small'),
    onMouseLeave: () => setSize('normal'),
  }
}
