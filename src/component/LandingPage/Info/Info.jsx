import './Info.css'
import React from 'react'

const Info = ({ size, platforms, category }) => {
    return (
        <section className="app-info">
            <h3>App Information</h3>
            <div className="info-details">
                <div className='det-items'>
                    <span>Developer</span>
                    <span>Logic Realm</span>
                </div>
                <div className='det-items'>
                    <span>Category</span>
                    <span>{category}</span>
                </div>
                <div className='det-items'>
                    <span>Platforms</span>
                    <span>{platforms}</span>
                </div>
                <div className='det-items'>
                    <span>Size</span>
                    <span>{size}</span>
                </div>
            </div>
        </section>
    )
}

export default Info