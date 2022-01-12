import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Skeleton from '../../components/Skeleton'


// Create a client as a top level variable
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {

    const res = await client.getEntries({
        content_type: 'drinks',
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug },
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'drinks',
        'fields.slug': params.slug,
    })

    if( ! items.length ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: { drink: items[0] },
        revalidate: 10,
    }
}

export default function RecipeDetails( { drink } ) {

    if (!drink) {
        return <Skeleton />
    }

    const { featuredImage, title, ingredients, method } = drink.fields
    
    return (

        <div className='content'>

                <section className='banner'>
                    <figure className='feat-image'>
                        <Image
                            className='test'
                            src={ 'https:' + featuredImage.fields.file.url } 
                            width={ featuredImage.fields.file.details.image.width }
                            height={ featuredImage.fields.file.details.image.height }
                            alt={ featuredImage.fields.description }
                        />
                    </figure>
                    <h2>{ title }</h2>
                </section>

                <div className='info'>

                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul>
                            { ingredients.map( ingredient => (
                                <li key={ ingredient }>{ ingredient }</li>
                            )) }
                        </ul>
                    </div>
                    
                    <div className='method'>
                        <h3>Method</h3>
                        { documentToReactComponents( method ) }
                    </div>
                    <hr />
                    <div className='legend'>
                        <h3>Legend</h3>
                    </div>

                </div>

                <style jsx>{`
                    .banner {
                        margin-top: -2em;
                        width: 100%;
                        overflow: hidden;
                        background: white;
                    }

                    .banner h2 {
                        margin: 1rem;
                        width: 100%;
                        max-width: 80ch;
                    }

                    .test {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }

                    .feat-image {
                        position: relative;
                        max-height: 300px;
                        margin: 0;
                        overflow: hidden;
                    }

                    .feat-image:before {
                        content: '';
                        inset: 0;
                        position: absolute;
                        background: rgba(0,0,0,0.35);
                        z-index: 1;
                    }
                    
                    .feat-image img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }

                    .info {
                        width: 100%;
                        max-width: 80ch;
                        margin: 0 auto;
                        padding: 1em;
                    }

                    .info h3 {
                        margin-top: .5em;
                        margin-bottom: 1rem;
                    }

                    .info p {
                        margin-bottom: 1rem;
                    }

                    .method p {
                        margin-bottom: 1rem;
                    }

                    hr {
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                    }
                `}</style>
            </div>    
    )
  }