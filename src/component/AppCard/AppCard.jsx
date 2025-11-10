import React from 'react'
import './AppCard.css'
import { Link } from 'react-router-dom'
import WindowIcon from '@mui/icons-material/Window';
import AndroidIcon from '@mui/icons-material/Android';

const AppCard = ({ app }) => {
    return (
        <article className="app-card-modern" role="listitem" itemID={app?.id}>
            <div className="card-media">
                <img
                    className="app-icon"
                    src={app?.img}
                />
                <div className="app-platforms">
                    {app?.platforms.includes('Windows') && <WindowIcon titleAccess="Available for Windows" style={{ color: "skyblue" }} />}
                    {app?.platforms.includes('Android') && <AndroidIcon titleAccess="Available for Android" style={{ color: "#3DDC84" }} />}
                </div>
            </div>
            <div className="card-body">
                <h3 className="app-title">{app?.name}</h3>
                <p className="app-desc">
                    {app?.sdesc}
                </p>
                <div className="card-actions">
                    <div className="card-meta">
                        <span className="size">{app?.size}</span>
                    </div>
                    <Link to={`/softwares/${app?.slug}`} >
                        <button className="btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default AppCard