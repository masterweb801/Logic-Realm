import './Download.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import { Android } from '@mui/icons-material';
import { motion as Motion } from 'motion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import HandymanIcon from '@mui/icons-material/Handyman';


const WindIcon = () => {
    return <span>
        <svg viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#fff"></path>
            </g>
        </svg>
    </span>
};

const Download = ({ platforms = "", dlink, vers, github, variants }) => {
    const [downLink, setDownLink] = useState({})

    useEffect(() => {
        if (dlink) {
            let cleaned = dlink?.replace(/&quot;/g, '"');
            let json = JSON.parse(cleaned);
            if (json.android || json.windows) {
                setDownLink(json);
            }
        }
    }, [dlink])
    return (
        <Motion.section className="download-section" variants={variants}>
            <h2>Download Now</h2>
            <div className="dl-btnGroup">
                {platforms.includes("Windows") && downLink.windows && <Link to={downLink?.windows} target='_blank'>
                    <Motion.button
                        className='windo'
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <WindIcon />
                        <span>Download for Windows</span>
                    </Motion.button>
                </Link>}
                {platforms.includes("Android") && downLink.android && <>
                    <Link to={downLink.android} target='_blank'>
                        <Motion.button
                            className='andro'
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Android />
                            <span>Download for Android</span>
                        </Motion.button>
                    </Link>

                    {downLink.driver && <Link to={downLink.driver} target='_blank' >
                        <Motion.button
                            className='windo'
                            style={{ marginTop: "1rem" }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <HandymanIcon style={{ height: "1.25rem" }} />
                            <span>Download Driver</span>
                        </Motion.button>
                    </Link>}
                </>}
            </div>
            <div className="btnBottom">
                <p>{vers && <>Version {vers} • </>}Free Download</p>
                <p>
                    Compatible with&nbsp;
                    {platforms.includes("Windows") && <>Windows 10+</>}
                    {platforms.includes("Windows") && platforms.includes("Android") && <>&nbsp;and&nbsp;</>}
                    {platforms.includes("Android") && <>Android 8+</>}
                </p>
                {github && <Link to={github} target='_blank'>
                    <Button variant="contained" startIcon={<GitHubIcon />} style={{ margin: "1rem 0", background: "#0D1117" }}>
                        Github
                    </Button>
                </Link>}
            </div>
        </Motion.section>
    )
}

export default Download