import styled from 'styled-components'
import { SiOverleaf } from 'react-icons/si'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `${theme.space[4]}px ${theme.space[3]}px`};
`

const Logo = styled(SiOverleaf)`
  color: ${({ theme }) => theme.colors.green};
`

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li`
  text-transform: uppercase;
  margin-left: ${({ theme }) => theme.space[4]}px;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Logo size='30px' />
      <nav>
        <Ul>
          <Li>About</Li>
          <Li>App</Li>
          <Li>Plans</Li>
          <Li>FAQ</Li>
          <Li>Contacts</Li>
        </Ul>
      </nav>
    </StyledHeader>
  )
}
