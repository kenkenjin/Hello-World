import type { Metadata } from 'next'
import './globals.css'

// Metadata configuration for SEO and browser display
export const metadata: Metadata = {
  title: 'Hello World - Next.js App',
  description: 'A simple Hello World website built with Next.js 14 and vanilla CSS',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

/**
 * Root Layout Component
 * 
 * This is the main layout component that wraps all pages in the app.
 * It defines the HTML structure, language, and applies global styles.
 * 
 * Props:
 * - children: React components to render in the layout (passed from page.tsx)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
