import { FC, useCallback, useState } from 'react'

import styles from './FlexSlider.module.scss'

import { getClassName, getMultipleClassName } from '@/styles'

const MAX_PAGE = 10

export type FlexSliderItem = {
  id: string
  image: string
  name: string
  description: string
}

export type FlexSliderProps = {
  sliders: FlexSliderItem[]
  initialActive?: number
}

export const FlexSlider: FC<FlexSliderProps> = ({ sliders, initialActive = 0 }) => {
  const [active, setActive] = useState(initialActive)
  const [page, setPage] = useState({ initialToRender: 0, endToRender: MAX_PAGE })

  const onSelect = (index: number) => setActive(index)
  const onPrev = () => {
    setPage(({ endToRender, initialToRender }) => {
      const nextInitialToRender = initialToRender - MAX_PAGE <= 0 ? 0 : initialToRender - MAX_PAGE
      const nextEndToRender = initialToRender - MAX_PAGE <= 0 ? MAX_PAGE : endToRender - MAX_PAGE
      return { initialToRender: nextInitialToRender, endToRender: nextEndToRender }
    })
  }
  const onNext = () => {
    setPage(({ endToRender, initialToRender }) => {
      const nextEndToRender = endToRender + MAX_PAGE >= sliders.length ? sliders.length : endToRender + MAX_PAGE
      const nextInitialToRender = endToRender + MAX_PAGE >= sliders.length ? nextEndToRender - MAX_PAGE : initialToRender + MAX_PAGE
      return { initialToRender: nextInitialToRender, endToRender: nextEndToRender }
    })
  }

  const getClassNamesItem = useCallback((isActive: boolean) => {
    return getMultipleClassName({
      styles,
      classes: [
        { parent: 'flexSlider_item', variants: { active: isActive } },
        { parent: 'flexSlider_itemName', variants: { active: isActive } },
        { parent: 'flexSlider_itemSectionContent', variants: { active: isActive } },
        { parent: 'flexSlider_itemSectionContentInner', variants: { active: isActive } },
      ],
    })
  }, [])

  return (
    <>
      <button style={{ padding: '16px', background: 'red', margin: '8px' }} onClick={onPrev}>
        Menos
      </button>
      <button style={{ padding: '16px', background: 'red', margin: '8px' }} onClick={onNext}>
        Mas
      </button>
      <ul className={styles.flexSlider}>
        {sliders.slice(page.initialToRender, page.endToRender).map((slider, index) => {
          const isActive = active === index
          const className = getClassNamesItem(isActive)
          return (
            <li
              key={slider.id}
              style={{ backgroundImage: `url(${slider.image})` }}
              className={className.flexSlider_item}
              onClick={() => onSelect(index)}
            >
              <h3 className={className.flexSlider_itemName}>{slider.name}</h3>
              <div className={className.flexSlider_itemSectionContent}>
                <div className={className.flexSlider_itemSectionContentInner}>
                  <div className={styles.flexSlider_itemSectionContentInnerBio}>
                    <h2>{slider.name}</h2>
                    <p>{slider.description}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
