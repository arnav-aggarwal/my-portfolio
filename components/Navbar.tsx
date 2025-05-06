import Link from "next/link"
import { siteConfig } from "@/site.config"

export function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        {siteConfig.name}
      </Link>
      <div className="space-x-6 text-sm sm:text-base">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </Link>
      </div>
    </nav>
  )
}
