import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/providers/ReduxProvider'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ReactQueryProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
