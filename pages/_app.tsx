import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import Divider from '../components/Divider'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <ThemeProvider attribute="class">
          <div className="container mx-auto font-sans">
            <NextNProgress color="#53BD95" />
            <Navbar />
            <main className="pb-32">
              <Component {...pageProps} />
              <Divider />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
