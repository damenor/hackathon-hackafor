import { FC } from 'react'

import { SliderFlex, SliderFlexItem } from '@/ui'

export type HomeCreatorsProps = {
  creators: any
}

const convertToFlexSlider = ({ creators }: HomeCreatorsProps): SliderFlexItem[] => {
  return creators.map((creator: any) => {
    const image = `https://github.com/${creator.social.find((social: any) => social.type === 'github')?.userName}.png?s=1200`
    // const image = `https://unavatar.io/${creator.social.find((social: any) => social.type === 'github')?.userName}`
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
