export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Developed with Next.js and Contentful by Nicklas Bryntesson</p>

        <style jsx>{`

            .site-footer {
                padding: 1rem;
                background-color: var(--footer-bg-color);
                text-align: center;
                font-size: 0.8rem;
            }
        
        `}</style>
    </footer>
  )
}
