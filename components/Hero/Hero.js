import { Box } from '@/primitives/Box'
import { GridLayout, GridItem } from '@/primitives/Grid'
import { ImageSlider } from './ImageSlider'
import { TextSlider } from './TextSlider'

export const Hero = () => {
  return (
    <Box height='calc(100vh - 94px)' border='1px solid' borderColor='blue'>
      <GridLayout
        height='100%'
        gridTemplateColumns='1fr 1fr'
        gridTemplateRows='1fr 1fr 1fr'
        gridTemplateAreas={`
        "title slider"
        "title slider"
        "copy slider"
        `}
      >
        <GridItem gridArea='title'>
          <TextSlider />
        </GridItem>
        <GridItem gridArea='slider'>
          <ImageSlider />
        </GridItem>
        <GridItem bg='green' gridArea='copy' />
      </GridLayout>
    </Box>
  )
}
