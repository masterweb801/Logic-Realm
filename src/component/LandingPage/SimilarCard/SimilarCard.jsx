import './SimilarCard.css'
import { Link } from 'react-router-dom'
import ScrollCard from '../../ScrollCard/ScrollCard'

const SimilarCard = ({ app }) => {
    return (
        <ScrollCard className={"similar-card"} direction={"left"} scroll={0.5} hoverScale={1.05}>
            <Link to={`/softwares/${app?.slug}`}>
                <div className="similar-container">
                    <img src={app?.img} alt={`${app?.name} app icon`} fetchPriority='low' loading='lazy' />
                    <h3>{app?.name}</h3>
                    <p>{app?.sdesc}</p>
                </div>
            </Link>
        </ScrollCard>
    )
}

export default SimilarCard