import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 md:px-12 py-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
