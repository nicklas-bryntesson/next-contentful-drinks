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
            </div>
            <div className="actions">
                <Link href="/drinks/[slug]" as={`/drinks/${slug}`}>
                    <a className="button">View</a>
                </Link>
            </div>

            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    background: wheat;
                }
            `}</style>
        </li>
    )
}
