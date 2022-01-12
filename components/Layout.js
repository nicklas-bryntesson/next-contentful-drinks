import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="app">
      
      <Header />

      <main className="page-content">
        { children }
      </main>

      <Footer />

    </div>
  )
}