import styles from './SliderFlex.module.scss'

import { getMultipleClassName } from '@/styles'

export const getClassNamesItem = (isActive: boolean) => {
  return getMultipleClassName({
    styles,
    classes: [
      { parent: 'sliderFlex_item', variants: { active: isActive } },
      { parent: 'sliderFlex_itemName', variants: { active: isActive } },
      { parent: 'sliderFlex_itemSectionContent', variants: { active: isActive } },
      { parent: 'sliderFlex_itemSectionContentInner', variants: { active: isActive } },
    ],
  })
}

export { styles }
