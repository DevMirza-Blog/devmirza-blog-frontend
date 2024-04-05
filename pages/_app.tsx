import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import NextNProgress from 'nextjs-progressbar'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <div className="container mx-auto font-sans">
            <NextNProgress color="#53BD95" />
            <Navbar />
            <main className="pb-32">
              <Component {...pageProps} />
              <SpeedInsights />
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
