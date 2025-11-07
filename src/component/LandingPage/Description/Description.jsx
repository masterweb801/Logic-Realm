import React, { useEffect, useState } from 'react'
import './Description.css'
import CheckIcon from '@mui/icons-material/Check';


const Description = ({ descP, descS, features }) => {
    const [flist, setFlist] = useState([])

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
    }, [features])

    return (
        <section className="description-section">
            <h2>About this app</h2>
            <div className="desc-prose">
                <p className="desc-p">{descP}</p>
                <p className="desc-s">{descS}</p>

                {flist.length > 0 ? <>
                    <h3>Key Features</h3>
                    <ul>
                        {flist.map((feature, key) => <li key={key}>
                            <CheckIcon />
                            <span>{feature}</span>
                        </li>)}
                    </ul>
                </> : <></>}
            </div>
        </section>
    )
}

export default Description