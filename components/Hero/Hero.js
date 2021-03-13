import { Box } from '@/primitives/Box'
import { GridLayout, GridItem } from '@/primitives/Grid'
import { Text } from '@/primitives/Text'
import { ImageSlider } from './ImageSlider'
import { TextSlider } from './TextSlider'

export const Hero = () => {
  return (
    <Box height='calc(100vh - 94px)' mr={3} ml={3}>
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
        <GridItem gridArea='copy'>
          <Text fontWeight='light' color='gray' fontSize={2}>
            Sustainable technologies have been so affordable.
            Produce and exchange energy maximizing the power of renewable sources.
          </Text>
        </GridItem>
      </GridLayout>
    </Box>
  )
}
