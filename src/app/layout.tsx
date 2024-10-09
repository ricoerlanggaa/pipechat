import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/providers/ReduxProvider'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PipeChat',
  description:
    'All-in-one business messaging platform uniting teams, conversations, data, and knowledge in one place.',
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' }
  ]
}

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
