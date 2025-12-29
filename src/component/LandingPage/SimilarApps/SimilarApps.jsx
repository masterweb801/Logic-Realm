import './SimilarApps.css'
import { useEffect, useState } from 'react'
import { motion as Motion } from 'motion/react'
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
            <Motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                Similar Apps You May Like
            </Motion.h2>
            <div className="similar-grid">

                {appList?.map((app, key) => { return <SimilarCard key={key} app={app} /> })}

            </div>
        </section>
    )
}

export default SimilarApps