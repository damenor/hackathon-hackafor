import { FC } from 'react'

import { FlexSlider, FlexSliderItem } from '@/ui'

export type HomeCreatorsProps = {
  creators: any
}

const convertToFlexSlider = ({ creators }: HomeCreatorsProps): FlexSliderItem[] => {
  return creators.map((creator: any) => {
    const image = `https://unavatar.io/github/${creator.social.find((social: any) => social.type === 'github')?.userName}`
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
      <div className="loader">
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <FlexSlider sliders={creatorsToSlider} />
    </>
  )
}
