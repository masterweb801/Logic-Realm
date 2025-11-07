import React from 'react'
import './SimilarCard.css'
import { Link } from 'react-router-dom'

const SimilarCard = ({ app }) => {
    return (
        <Link className="similar-card" to={`/apps/${app?.slug}`}>
            <div className="similar-container">
                <img src={app?.img} />
                <h3>{app?.name}</h3>
                <p>{app?.sdesc}</p>
            </div>
        </Link>
    )
}

export default SimilarCard