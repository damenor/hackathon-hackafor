export type SliderFlexItem = {
  id: string
  image: string
  name: string
  description: string
}

export type SliderFlexProps = {
  sliders: SliderFlexItem[]
  initialActive?: number
}

export type UseSliderFlexArgs = SliderFlexProps
