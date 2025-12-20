import React from 'react'
import './Header.css'

const Header = ({ img, name, desc }) => {
    return (
        <section className="app-header">
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
        </section>
    )
}

export default Header