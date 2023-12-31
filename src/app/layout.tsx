import { StitchesRegistry } from '@/styles/globals'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import Providers from './components/Providers'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Personal Schedule',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>
          <StitchesRegistry>{children}</StitchesRegistry>
        </Providers>
      </body>
    </html>
  )
}
