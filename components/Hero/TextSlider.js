import styled from 'styled-components'
import { Button } from '@/components/Button'
import { Text } from '@/primitives/Text'
import { Box } from '@/primitives/Box'
import { Flex } from '@/primitives/Flex'
import { GridLayout, GridItem } from '@/primitives/Grid'

const HighlightedText = styled.span`
  display: inline-block;
  
  &:before {
    content: ' ';
    display: block;
    height: 30%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: rgba(235, 149, 59,0.3);
    transform: rotate(2deg);
    bottom: 10px;
    left: 0px;
    border-radius: 20% 25% 20% 24%;
    padding: 0px 3px 0px 5px;
  }
`

const Highlight = ({ children }) => (
  <Box display='inline' position='relative'>
    <HighlightedText>
      {children}
    </HighlightedText>
  </Box>
)

const Dot = styled.div`
  cursor: pointer;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.space[2]};
`

const DotSlider = () => {
  return (
    <Box>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Box>
  )
}

export const TextSlider = () => {
  return (
    <>
      <Flex>
        <Box>
          <Flex
            height='100%'
            flexDirection='column'
            justifyContent='flex-end'
            alignItems='center'
            mr={4}
          >
            <DotSlider />
          </Flex>
        </Box>
        <Box>
          <Text as='h1' fontSize={6}>
            Start <Highlight>energy</Highlight> revolution from your community
          </Text>
          <Button>Contact us</Button>
        </Box>
      </Flex>
      <Text fontWeight='light' color='gray' fontSize={2} ml={4} mt={5}>
        Sustainable technologies have been so affordable.
        Produce and exchange energy maximizing the power of renewable sources.
      </Text>
    </>
  )
}
