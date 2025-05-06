import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-12 py-8">{children}</main>
      <Footer />
    </>
  )
}
