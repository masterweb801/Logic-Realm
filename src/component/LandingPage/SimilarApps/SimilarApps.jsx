import React, { useEffect, useState } from 'react'
import './SimilarApps.css'
import SimilarCard from '../SimilarCard/SimilarCard'

const SimilarApps = ({ slug }) => {
    const [appList, setAppList] = useState([]);

    const getSimilarApps = async (slug) => {
        try {
            let url = `${import.meta.env.VITE_API_URL}api/routes/getSimilarApps.php`;
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug })
            });
            let data = await response.json();
            if (data && data.response_data) {
                setAppList(data.response_data);
            } else {
                console.warn('No response_data for slug:', slug, data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSimilarApps(slug);
    }, [slug])
    return (
        <section className="similar-apps-section">
            <h2>Similar Apps You May Like</h2>
            <div className="similar-grid">

                {appList?.map((app, key) => { return <SimilarCard key={key} app={app} /> })}

            </div>
        </section>
    )
}

export default SimilarApps