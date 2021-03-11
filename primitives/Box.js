import styled from 'styled-components'
import { space, layout, color, border, compose } from 'styled-system'

export const Box = styled('div')(
  compose(
    space,
    layout,
    color,
    border
  )
)
