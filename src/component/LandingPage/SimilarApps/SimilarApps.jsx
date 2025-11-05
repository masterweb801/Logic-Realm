import React, { useEffect } from 'react'
import './SimilarApps.css'
import SimilarCard from '../SimilarCard/SimilarCard'

const SimilarApps = ({ slug = "" }) => {
    useEffect(() => {
        console.log(slug)
    }, [slug])

    return (
        <section className="similar-apps-section">
            <h2>Similar Apps You May Like</h2>
            <div className="similar-grid">

                <SimilarCard />
                <SimilarCard />
                <SimilarCard />
                <SimilarCard />

            </div>
        </section>
    )
}

export default SimilarApps