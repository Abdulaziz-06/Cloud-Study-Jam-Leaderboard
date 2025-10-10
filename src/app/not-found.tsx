import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] text-[var(--text-color)]">
      <div className="text-center">
        <div className="mb-8">
          <Image 
            src="/assets/cloudLg.png" 
            alt="Google Cloud" 
            width="120" 
            height="120" 
            className="mx-auto opacity-50"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 text-[var(--text-color)]/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Return to Leaderboard
        </Link>
      </div>
    </div>
  )
}
