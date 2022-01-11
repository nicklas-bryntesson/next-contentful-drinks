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
    const items = await client.getEntries({
        content_type: 'drinks',
        'fields.slug': params.slug,
    })

    if(!items.length) {
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
   console.log(drink),

   <div className='content'>

        <section className='banner'>
                <figure>
                <Image
                    src={ 'https:' + featuredImage.fields.file.url } 
                    width={ featuredImage.fields.file.details.image.width }
                    height={ featuredImage.fields.file.details.image.height }
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
                { documentToReactComponents(method) }
            </div>

        </div>
    </div>    
    )
  }