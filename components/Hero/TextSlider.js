import styled from 'styled-components'
import { Button } from '@/components/Button'
import { Text } from '@/primitives/Text'
import { Box } from '@/primitives/Box'

const Highlight = styled.span`
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
export const TextSlider = () => {
  return (
    <>
      <Text as='h1' fontSize={6}>
        Start{' '}
        <Box display='inline' position='relative'>
          <Highlight>
            energy
          </Highlight>
        </Box> revolution from your community
      </Text>
      <Button>Contact us</Button>
    </>
  )
}
