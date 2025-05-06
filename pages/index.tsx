import Link from "next/link"

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I'm Arnav
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I'm a full-stack web developer focused on building clean, responsive, performant, user-friendly web applications.
        </p>
      </div>

      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <Link
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
