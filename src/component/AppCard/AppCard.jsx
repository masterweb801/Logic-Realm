import React from 'react'
import './AppCard.css'
import { Link } from 'react-router-dom'

const AppCard = ({ app }) => {
    return (
        <article className="app-card-modern" role="listitem" itemID={app.id}>
            <div className="card-media">
                <img
                    className="app-icon"
                    src={app.img}
                    alt={`${app.name} App Icon`}
                />
            </div>
            <div className="card-body">
                <h3 className="app-title">{app.name}</h3>
                <p className="app-desc">
                    {app.sdesc}
                </p>
                <div className="card-actions">
                    <div className="card-meta">
                        <span className="size">{app.size}</span>
                    </div>
                    <Link to={`/apps/${app.id}`} >
                        <button className="btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default AppCard