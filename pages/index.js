import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'drinks' })

  return {
    props: {
      drinks: res.items,
    }
  }

}

export default function Recipes({ drinks }) {
  console.log(drinks)

  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}