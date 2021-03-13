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
      >
        <GridItem>
          <TextSlider />

        </GridItem>
        <GridItem>
          <ImageSlider />
        </GridItem>
      </GridLayout>
    </Box>
  )
}
