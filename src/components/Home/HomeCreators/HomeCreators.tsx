import { FC, useMemo } from 'react'

import { SliderFlex, SliderFlexItem } from '@/ui'
import { CreatorTwitchType, ECreatorSocialType } from '@/types'

export type HomeCreatorsProps = {
  creators: CreatorTwitchType[]
}

const convertToFlexSlider = ({ creators }: HomeCreatorsProps): SliderFlexItem[] => {
  return creators.map((creator) => {
    const image = useMemo(() => {
      if (creator.avatar) return creator.avatar
      return `https://unavatar.io/github/${creator.social.find(social => social.type === ECreatorSocialType.Github)?.userName}`
    }, [creator])
    return {
      description: creator.description,
      id: creator._id,
      image,
      name: creator.name,
    }
  })
}

export const HomeCreators: FC<HomeCreatorsProps> = ({ creators }) => {
  const creatorsToSlider = convertToFlexSlider({ creators })
  return (
    <>
      <SliderFlex sliders={creatorsToSlider} />
    </>
  )
}
