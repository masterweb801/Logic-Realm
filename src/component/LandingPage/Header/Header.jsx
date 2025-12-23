import './Header.css'
import { motion as Motion } from 'motion/react'

const Header = ({ img, name, desc, variants }) => {
    return (
        <Motion.section className="app-header" variants={variants}>
            <div className="app-header-container">
                <div className="app-icon-container">
                    <img
                        src={img}
                        alt={`${name} app icon`}
                        fetchPriority='high'
                    />
                </div>
                <div className="app-header-details">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </Motion.section>
    )
}

export default Header