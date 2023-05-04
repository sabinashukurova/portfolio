import Icon from '@/components/Icon'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Comme } from 'next/font/google'

const comme = Comme({
  subsets: ['latin'],
  variable: '--font-comme'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${comme.variable} font-comme bg-light w-full min-h-screen`}>
      <NavBar/>
      <Component {...pageProps} />
      <Icon />
    </main>)
}
