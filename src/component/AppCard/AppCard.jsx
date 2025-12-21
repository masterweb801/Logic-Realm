import './AppCard.css'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react';
import WindowIcon from '@mui/icons-material/Window';
import AndroidIcon from '@mui/icons-material/Android';

const AppCard = ({ app }) => {
    return (
        <Motion.article
            className="app-card-modern"
            role="listitem"
            itemID={app?.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
        >
            <div className="card-media">
                <Motion.img
                    className="app-icon"
                    src={app?.img}
                    alt={`${app?.name} app icon`}
                    layout
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
                        <Motion.button
                            className="btn-primary"
                            whileTap={{ scale: 0.95 }}
                        >
                            Details
                        </Motion.button>
                    </Link>
                </div>
            </div>
        </Motion.article>
    )
}

export default AppCard