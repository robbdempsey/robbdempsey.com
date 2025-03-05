import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Robb Dempsey - %s',
    default:
      'Robb Dempsey - Fullstack Engineer, Sojourner, Outdoorsman',
  },
  description:
    'How can I help you? Product Development Leader who has spent the past 20 years helping start-ups and fortune 500 companies take ideas to the market. Currently based in a small town just outside of Nashville.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
