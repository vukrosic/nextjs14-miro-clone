import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { AuthLoading, Authenticated } from 'convex/react'
import { Loading } from '@/components/auth/loading'
import { Toaster } from '@/components/ui/sonner'
import { ModalProvider } from '@/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WhatsApp Clone',
  description: 'WhatsApp Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
