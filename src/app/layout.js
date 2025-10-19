import './globals.css'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';

const googleSans = localFont({
  src: '../fonts/GoogleSans-Regular.ttf',
  variable: '--font-google-sans',
  display: 'swap',
})

export const metadata = {
  title: "Google Cloud Study Jams Leaderboard - Modern",
  description: 'Leaderboard for Google Cloud Study Jams',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}