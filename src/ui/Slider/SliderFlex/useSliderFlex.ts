import { useState } from 'react'

import { UseSliderFlexArgs } from './SliderFlex.types'

const MAX_PAGE = 10

export const useSliderFlex = ({ sliders, initialActive }: UseSliderFlexArgs) => {

  const [state, setState] = useState({ page: initialActive, initialToRender: 0, endToRender: MAX_PAGE })

  const onSelect = (page: number) => setState(prevState => ({ ...prevState, page }))

  const onPrev = () => {
    setState(({ endToRender, initialToRender, ...prevState }) => {
      const nextInitialToRender = initialToRender - MAX_PAGE <= 0 ? 0 : initialToRender - MAX_PAGE
      const nextEndToRender = initialToRender - MAX_PAGE <= 0 ? MAX_PAGE : endToRender - MAX_PAGE
      return { ...prevState, initialToRender: nextInitialToRender, endToRender: nextEndToRender }
    })
  }
  const onNext = () => {
    setState(({ endToRender, initialToRender, ...prevState }) => {
      const nextEndToRender = endToRender + MAX_PAGE >= sliders.length ? sliders.length : endToRender + MAX_PAGE
      const nextInitialToRender = endToRender + MAX_PAGE >= sliders.length ? nextEndToRender - MAX_PAGE : initialToRender + MAX_PAGE
      return { ...prevState, initialToRender: nextInitialToRender, endToRender: nextEndToRender }
    })
  }

  return { onSelect, onPrev, onNext, ...state }

}
