import type { ThemeConfig } from 'antd'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const theme: ThemeConfig = {
  token: {
    fontFamily: inter.style.fontFamily,
    colorPrimary: '#3484BC'
  }
}

export default theme
