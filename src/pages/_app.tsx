import '@/styles/globals.scss'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header />
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
  )
}