import Link from "next/link"
import Image from "next/image"

export default function DrinkCard({ drink }) {

    const { title, slug, thumbnail,} = drink.fields

    return (
        <li className="card">
            <figure className="card-image">
                <Image 
                    src={'https:' + thumbnail.fields.file.url }
                    width={ thumbnail.fields.file.details.image.width }
                    height={ thumbnail.fields.file.details.image.height }
                />
            </figure>
            <div className="card-content">
                <h3>{ title }</h3>
                <div className="actions">
                <Link href="/drinks/[slug]" as={`/drinks/${slug}`}>
                    <a className="cta-button">View</a>
                </Link>
            </div>
            </div>


            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    background: var(--card-background);
                    overflow: hidden;
                    border-radius: .25em;
                    box-shadow: var(--shadow-elevation-medium);
                }

                .card figure {
                    margin: 0;
                    padding: 0;
                    aspect-ratio: 1/1;
                    background-color: beige;
                    overflow: hidden;
                }

                .card figure img {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 1;
                    object-fit: cover;
                }

                .card-content {
                    padding: 1rem;
                }

                .card-content h3 {
                    margin-bottom: .75rem;
                }

                .card-content .cta-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .5em 1em;
                    border: .125em solid var(--main-text-color);
                    border-radius: .25em;
                    color: var(--main-text-color);
                    font-weight: bold;
                    text-decoration: none;
                    transition: all .2s ease-in-out;
                }

                .card-content .cta-button:hover {
                    background: var(--main-text-color);
                    color: var(--card-background);
                }

            `}</style>
        </li>
    )
}
