import MainHeader from './Components/MainHeader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TKF Construction Company LLC',
  description: 'Construction Company',
}

export default function RootLayout({ children }) {
  return (
  /*  <html lang="en">
    <link rel="icon" href="/tkf-logo.png" type="image" sizes="any" />
      <body className={inter.className}>
        <MainHeader>{children}</MainHeader></body>
    </html> */
  )
}
