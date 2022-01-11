export default function Skeleton() {
    return (
        <div className="skeleton">
            <div className="banner"></div>
            <div className="info"></div>
            <div className="ingredients"></div>
            <div className="method"></div>

            <style jsx>{`

                .skeleton {
                    max-width: 80ch;
                    margin: 1rem auto;
                }

                .skeleton > div {
                    background: #f0f0f0;
                    padding: 1rem;
                    margin: 1rem;
                    border-radius: 0.5rem;
                }

                .skeleton .banner {
                    height: 200px;
                }

                .skeleton .info {
                    height: 100px;
                }

                .skeleton .ingredients {
                    height: 100px;
                }

                .skeleton .method {
                    height: 100px;
                }

            `}</style>
        </div>
    )
}