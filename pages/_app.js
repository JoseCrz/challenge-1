import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mitr', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
