import styled from 'styled-components'
import { grid } from 'styled-system'
import { Box } from '@/primitives/Box'

export const GridLayout = styled(Box)`
  display: grid;
  ${grid}
`

export const GridItem = styled(Box)`
  ${grid}
`
