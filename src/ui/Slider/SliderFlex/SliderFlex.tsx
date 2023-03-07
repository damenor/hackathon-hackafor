import { FC } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'

import { SliderFlexProps } from './SliderFlex.types'
import { styles, getClassNamesItem } from './SliderFlex.styles'
import { useSliderFlex } from './useSliderFlex'

export const SliderFlex: FC<SliderFlexProps> = ({ sliders, initialActive = 0 }) => {
  const { endToRender, initialToRender, page, onSelect, onNext, onPrev } = useSliderFlex({ sliders, initialActive })

  return (
    <>
      <div className={styles.sliderFlex_buttons}>
        <button onClick={onPrev}>
          <AiOutlineCaretLeft size={24} color="var(--color-bg-contrast)" />
        </button>
        <button onClick={onNext}>
          <AiOutlineCaretRight size={24} color="var(--color-bg-contrast)" />
        </button>
      </div>
      <ul className={styles.sliderFlex}>
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
