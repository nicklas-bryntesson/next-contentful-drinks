import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>Drinks</h1>
          </a>
        </Link>
      </header>

      <main className="page-content">
        { children }
      </main>

      <footer>
        <p>Developed with Next.js and Contentful by Nicklas Bryntesson</p>
      </footer>
    </div>
  )
}