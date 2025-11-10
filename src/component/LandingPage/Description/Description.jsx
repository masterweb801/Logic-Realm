import React, { useEffect, useState } from 'react'
import './Description.css'
import CheckIcon from '@mui/icons-material/Check';
import ReactMarkdown from 'react-markdown';
import FlagIcon from '@mui/icons-material/Flag';


const Description = ({ descP, descS, features, steps }) => {
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
                console.log(json.response)
            }
        } else {
            setSlist([]);
        }
    }, [steps]);

    return (
        <section className="description-section">
            <h2>About this app</h2>
            <div className="desc-prose">
                <p className="desc-p">{descP}</p>
                <p className="desc-s">{descS}</p>

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
        </section>
    )
}

export default Description