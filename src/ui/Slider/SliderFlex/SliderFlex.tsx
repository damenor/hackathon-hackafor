import { FC } from 'react'

import { useMouseFollowerMethods } from '@/ui/MouseFollower'

import { SliderFlexProps } from './SliderFlex.types'
import { styles, getClassNamesItem } from './SliderFlex.styles'
import { useSliderFlex } from './useSliderFlex'

export const SliderFlex: FC<SliderFlexProps> = ({ sliders, initialActive = 0 }) => {
  
  const { endToRender, initialToRender, page, onSelect } = useSliderFlex({ sliders, initialActive })
  const mouseFollowerMethods = useMouseFollowerMethods()

  return (
    <>
      <ul className={styles.sliderFlex} { ...mouseFollowerMethods }>
        {sliders.slice(initialToRender, endToRender).map((slider, index) => {
          const isActive = page === index
          const className = getClassNamesItem(isActive)
          return (
            <li
              key={slider.id}
              style={{ backgroundImage: `url(${slider.image})` }}
              className={className.sliderFlex_item}
              onClick={() => onSelect(index)}
            >
              <h2 className={className.sliderFlex_itemName}>{slider.name}</h2>

              <div className={className.sliderFlex_itemSectionContent}>
                <div className={className.sliderFlex_itemSectionContentInner}>
                  <div className={styles.sliderFlex_itemSectionContentInnerBio}>
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
