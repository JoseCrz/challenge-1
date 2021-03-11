import { Head } from '@/components/Head'
import { Header } from '@/components/Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Platzi Challenge</title>
      </Head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </>
  )
}
