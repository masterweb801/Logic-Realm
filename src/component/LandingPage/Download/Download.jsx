import React from 'react'
import './Download.css'
import { Android } from '@mui/icons-material';


const WindIcon = () => {
    return <svg viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#fff"></path>
        </g>
    </svg>
};

const Download = ({ platforms = "" }) => {
    return (
        <section className="download-section">
            <h2>Download Now</h2>
            <div className="dl-btnGroup">
                {platforms.includes("Windows") && <button className='windo'>
                    <WindIcon />
                    <span>Download for Windows</span>
                </button>}
                {platforms.includes("Android") && <button className='andro'>
                    <Android />
                    <span>Download for Android</span>
                </button>}
            </div>
            <div className="btnBottom">
                <p>Version 2.1.4 • Free Download</p>
                <p>
                    Compatible with&nbsp;
                    {platforms.includes("Windows") && <>Windows 10+</>}
                    {platforms.includes("Windows") && platforms.includes("Android") && <>&nbsp;and&nbsp;</>}
                    {platforms.includes("Android") && <>Android 8+</>}
                </p>
            </div>
        </section>
    )
}

export default Download