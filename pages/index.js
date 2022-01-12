import { createClient } from 'contentful'
import DrinkCard from '../components/DrinkCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'drinks' })

  return {
    props: { drinks: res.items },
    revalidate: 10,
  }
}

export default function Recipes({ drinks }) {

  return (
    <div className='wrapper'>
      <h2 className='page-title'>Cocktails & Longdrinks</h2>
      <ul className="drinks-list">
        { drinks.map( drink => (
          <DrinkCard key={ drink.sys.id} drink={ drink } />
        ))}
      </ul>
      
      <style jsx>{`
        .page-title {
          max-width: 80ch;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 2rem;
        }

          .drinks-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
            grid-gap: 1.75em;
            list-style: none;
            padding: 0;
            margin: 1.75em;
          }

          /* Fix this with container queries + fallback */
          @media (min-width: 1080px) {
            .drinks-list {
              max-width: 80vw;
              margin: 0 auto;
            }
          }
      `}</style>
    </div>
  )
}