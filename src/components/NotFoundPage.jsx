import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[var(--background)] text-[var(--primary-text)]">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg max-w-md mb-6">Oops! The page you’re looking for doesn’t exist or has been moved.</p>

      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
      >
        <ArrowLeft size={18} />
        Return Home
      </Link>
    </section>
  )
}

export default NotFoundPage
