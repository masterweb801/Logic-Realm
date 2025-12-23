import './Info.css'
import { motion as Motion } from 'motion/react'

const Info = ({ size, platforms, category, variants }) => {
    return (
        <Motion.section className="app-info" variants={variants}>
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
        </Motion.section>
    )
}

export default Info