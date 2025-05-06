import { siteConfig } from "@/site.config"

export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  )
}
