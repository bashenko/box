import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer/Footer'
import { Jost, Michroma } from 'next/font/google'
import Head from 'next/head';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--jost'
})
 
const michroma = Michroma({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--michroma'
})

export const metadata: Metadata = {
  title: 'Matchup: Fan Owned Boxing',
  description: 'Matchup: Fan Owned Boxing Is a web3 boxing promotions platform governed by a community of dedicated and knowledgeable boxing fans, organized as a DAO, who make matches, fund purses and promote the fights fans want to see, when they want to see them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./img/favicon.ico" />
      </Head>
      <body className={`${jost.variable} ${michroma.variable}`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
