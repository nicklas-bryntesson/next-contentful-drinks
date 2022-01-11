import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)   
    }, [])

    return (
        <div className="not-found">
            <h2>404</h2>
            <h3>Opps that page cannot be found</h3>
            <p>Redirecting to home...<Link href="/">Homepage</Link></p>  

            <style jsx>{`
                .not-found {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
            `}</style>
        </div>
    )
}
