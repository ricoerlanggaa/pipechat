import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, ThemeConfig } from 'antd'

const inter = Inter({ subsets: ['latin'] })
const theme: ThemeConfig = {
  token: {
    fontFamily: inter.style.fontFamily,
    colorPrimary: '#3484BC'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
