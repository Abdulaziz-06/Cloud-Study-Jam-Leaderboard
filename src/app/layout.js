import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Switch from '../components/ui/sky-toggle';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Google Cloud Study Jams Leaderboard - Modern",
  description: 'Leaderboard for Google Cloud Study Jams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute top-16 right-4 z-50">
          <Switch />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
