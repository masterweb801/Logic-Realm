import './Description.css';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { motion as Motion } from 'motion/react'
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';


const Description = ({ descP, descS, features, steps, variants }) => {
    const [flist, setFlist] = useState([]);
    const [slist, setSlist] = useState([]);

    useEffect(() => {
        if (features) {
            let cleaned = features.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
            let json = JSON.parse(cleaned)
            if (json?.response.length > 0) {
                setFlist(json.response);
            }
        } else {
            setFlist([]);
        }
    }, [features]);

    useEffect(() => {
        if (steps) {
            let cleaned = steps.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
            let json = JSON.parse(cleaned)
            if (json?.response.length > 0) {
                setSlist(json.response);
            }
        } else {
            setSlist([]);
        }
    }, [steps]);

    return (
        <Motion.section className="description-section" variants={variants}>
            <h2>About this app</h2>
            <div className="desc-prose">
                <p className="desc-p">{descP?.replace(/&amp;/g, "&")?.replace(/&#039;/g, "'")}</p>
                <p className="desc-s">{descS?.replace(/&amp;/g, "&")?.replace(/&#039;/g, "'")}</p>

                {flist.length > 0 && (
                    <>
                        <h3>Key Features</h3>
                        <ul>
                            {flist.map((feature, key) => <li key={key}>
                                <CheckIcon />
                                <span>{feature}</span>
                            </li>)}
                        </ul>
                    </>
                )}

                {slist.length > 0 && (
                    <>
                        <br />
                        <h3>How to Use / Installation Steps</h3>
                        <ol type='1' className='force-markers'>
                            {slist.map((step, key) => (
                                <li key={key}>
                                    <FlagIcon />
                                    <div className="li-inner">
                                        <ReactMarkdown>
                                            {step}
                                        </ReactMarkdown>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </div>
        </Motion.section>
    )
}

export default Description