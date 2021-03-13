import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii[4]};
  background-color: ${({ theme }) => theme.colors.greenTransparent};
  border: none;
  padding: ${({ theme }) => theme.space[2]};
  min-width: 110px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  outline: none;
`
export const Button = ({ children }) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
