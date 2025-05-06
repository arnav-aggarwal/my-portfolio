import Link from "next/link"
import Head from "next/head"
import { siteConfig } from "@/site.config"

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name} | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Full-stack portfolio of Arnav Aggarwal, showcasing projects and skills in modern web development."
        />
      </Head>
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I'm Arnav
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            {siteConfig.tagline}
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  )
}
