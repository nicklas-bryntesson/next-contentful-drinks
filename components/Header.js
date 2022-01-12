import Link from 'next/link'

export default function Header() {
    return (
        <header className="site-header">
            <Link href="/">
                <a><h1>Drinks</h1></a>
            </Link>

            <style jsx>{`
            
                .site-header {
                    display: grid;
                    place-items: center;
                    padding: 1rem;
                    background-color: var(--header-bg-color);
                }
            
            `}</style>

        </header>
    )
}
