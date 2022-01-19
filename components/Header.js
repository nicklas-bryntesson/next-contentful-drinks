import Link from 'next/link'

export default function Header() {
    return (
        <header className="site-header">
            <div className="wrapper">
                <div className="branding">
                    <Link href="/">
                        <a><h1>Drinks</h1></a>
                    </Link>
                    <p>Establised 2022</p>
                </div>
            </div>



            <style jsx>{`
            
                .site-header {
                    display: flex;
                    padding: 1rem;
                    background-color: var(--surface3);
                }

                .branding {
                    display: flex;
                    flex-direction: column;
                }

                .branding h1 {
                    margin-top: 0;
                    margin-bottom: .25em;
                }

                .branding p {
                    margin: 0;
                }
            
            `}</style>

        </header>
    )
}
