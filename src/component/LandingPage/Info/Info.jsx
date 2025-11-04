import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <section className="app-info">
            <h3>App Information</h3>
            <div className="info-details">
                <div className='det-items'>
                    <span>Developer</span>
                    <span>ProductiveTech Inc.</span>
                </div>
                <div className='det-items'>
                    <span>Category</span>
                    <span>Productivity</span>
                </div>
                <div className='det-items'>
                    <span>Availability</span>
                    <span>Android, Windows</span>
                </div>
                <div className='det-items'>
                    <span>Size</span>
                    <span>45.2 MB</span>
                </div>
            </div>
        </section>
    )
}

export default Info