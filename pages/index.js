import { createClient } from 'contentful'
import DrinkCard from '../components/DrinkCard'

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

  return (
    <ul className="drinks-list">
      { drinks.map( drink => (
        <DrinkCard key={ drink.sys.id} drink={drink} />
      ))}
        <style jsx>
          {`
            .drinks-list {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              grid-gap: 1rem;
              list-style: none;
              padding: 0;
              margin: 1rem;
            }
          `}
        </style>
    </ul>
  )
}