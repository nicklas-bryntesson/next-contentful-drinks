import { createClient } from 'contentful'
import Image from 'next/image'

// Create a client as a top level variable
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await client.getEntries({
        content_type: 'drinks',
        'fields.slug': params.slug,
    })

    return {
        props: { drink: res.items[0] }
    }

}

export default function RecipeDetails( { drink } ) {

    console.log(drink)

    const { featuredImage, title, ingredients, method } = drink.fields
    
    return (
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
        <div className=''>
            Stuff
        </div>
    </div>    
    )
  }