import '@/styles/reset.scss'
import '@/styles/global.scss'
import '@/styles/variables.css'
import type { Metadata } from 'next'
import { roboto } from '@/libs/font'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'ITWorked',
  description: 'Project Management System Landing Page',
  openGraph:{
    images:['https://raw.githubusercontent.com/mertthesamael/itw-landing/master/public/itworked.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className + ' ' + 'dark'}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
