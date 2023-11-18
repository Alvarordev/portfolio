import type { Metadata } from 'next'
import { montserrat, poppins } from '@/ui/fonts'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Hazard | portfolio',
  description: 'Bienvenidos, a mi portfolio web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
