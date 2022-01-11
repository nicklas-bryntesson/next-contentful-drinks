import { createClient } from 'contentful'

// Create a client as a top level variable
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})


const getStaticPaths = async () => {

    const res = await client.getEntries({
        content_type: 'drinks',
    })
    
    return {
        paths: []
    }
}

export default function RecipeDetails() {
    return (
      <div>
        Drink recipe details
      </div>
    )
  }