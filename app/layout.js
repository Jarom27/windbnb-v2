import { Montserrat,Mulish } from 'next/font/google'
import './globals.css';
import Header from './components/Header';
const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'windbnb',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
