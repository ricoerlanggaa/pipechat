import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/providers/ReduxProvider'
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
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
