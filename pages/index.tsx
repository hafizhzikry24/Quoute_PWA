import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchAdvice = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      setAdvice(data.slip.advice)
    } catch (error) {
      console.error('Error fetching advice:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-700 min-h-screen flex flex-col justify-center items-center p-6">
      <Head>
        <title>Advice PWA</title>
        <meta name="description" content="A simple PWA that provides advice." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="bg-white shadow-2xl rounded-3xl p-5 sm:p-10  w-5/6 sm:w-full max-w-lg mx-auto text-center transform transition duration-500 hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-12 sm:w-16 h-12 sm:h-16 text-indigo-600 mb-2 mt-2 animate-bounce"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <h1 className="text-xl sm:text-4xl font-bold text-gray-800 mb-5 tracking-wide">
          Quote of the Day
        </h1>
        <p
          className={`text-sm sm:text-xl text-center text-gray-700 mb-8 px-4 opacity-0 transition-opacity duration-500 ease-in-out delay-200 ${!loading && 'opacity-100'}`}
        >
          {loading ? 'Loading...' : advice}
        </p>
        <button
          onClick={fetchAdvice}
          className="bg-indigo-600 text-white text-xs sm:text-base px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform transition duration-300 hover:-translate-y-1 hover:scale-110"
        >
          Another Quote?
        </button>
        <a
  href="https://zikkdev.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 text-gray-700 text-xs sm:text-base font-medium transform transition duration-300 hover:underline hover:scale-110"
>
  Find Me
</a>

      </main>
      <footer className="mt-12 text-gray-200">
        <p className="sm:text-base text-sm mb-1">Powered by Next.js and Tailwind CSS</p>
        <p className="text-center text-xs">Created by Zikkdev</p>
      </footer>
    </div>
  )
}
