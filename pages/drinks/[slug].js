import { createClient } from 'contentful'

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
    return (
      <div>
        Drink recipe details
      </div>
    )
  }