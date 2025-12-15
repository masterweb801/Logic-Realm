import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/AppLandingPage.css';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../component/LandingPage/Header/Header.jsx';
import Description from '../component/LandingPage/Description/Description.jsx';
// import Screenshots from '../component/LandingPage/SS/Screenshots.jsx';
import Download from '../component/LandingPage/Download/Download.jsx';
import Info from '../component/LandingPage/Info/Info.jsx';
import SimilarApps from '../component/LandingPage/SimilarApps/SimilarApps.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AppLandingPage = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [appDetails, setAppDetails] = useState({})

    const getAppData = async (slug, { background = false } = {}) => {
        if (!slug) return null;

        if (!background) setLoading(true);

        try {
            let url = `${import.meta.env.VITE_API_URL}api/routes/getAppDetails.php`
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug })
            });
            let data = await response.json();

            if (data && data.response_data) {
                setAppDetails(data.response_data);
                const existing = JSON.parse(localStorage.getItem("allSoftwares") || "{}");
                existing[slug] = data.response_data;
                localStorage.setItem("allSoftwares", JSON.stringify(existing));
                document.title = `${data.response_data.name} | Logic Realm`
            } else {
                console.warn('No response_data for slug:', slug, data);
            }

        } catch (err) {
            console.error('Failed to fetch app details:', err);
        } finally {
            if (!background) setLoading(false);
        }

    }

    useEffect(() => {
        try {
            const raw = localStorage.getItem("allSoftwares");
            const allSoftwares = raw ? JSON.parse(raw) : {};
            if (allSoftwares && allSoftwares[slug]) {
                setAppDetails(allSoftwares[slug]);
            }
        } catch (err) {
            console.error('Failed to read cache, fetching from API:', err);
        }
        getAppData(slug, { background: true });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [slug]);

    return (
        <div className="app-landing-page">
            {loading ? <CircularProgress />
                : <div className='app-landing-container'>
                    <Header
                        img={appDetails.img}
                        name={appDetails.name}
                        desc={appDetails.sdesc}
                    />
                    <div className="app-landing-grid">
                        <div className="aplan-con">
                            <Description
                                descP={appDetails.descP}
                                descS={appDetails.descS}
                                features={appDetails.features}
                                steps={appDetails.steps}
                            />
                            {/* <Screenshots /> */}
                        </div>
                        <div className="aplan-con-2">
                            <Download
                                platforms={appDetails.platforms}
                                dlink={appDetails.dlink}
                                vers={appDetails.vers}
                                github={appDetails.github}
                            />
                            <Info
                                size={appDetails.size}
                                platforms={appDetails.platforms}
                                category={appDetails.category}
                            />
                        </div>
                    </div>
                    <SimilarApps slug={slug} />
                </div>
            }
            <Link to='/softwares' className='backBtn'>
                <IconButton
                    aria-label="Go back"
                    style={{
                        position: "fixed",
                        top: "6rem",
                        left: "2rem",
                        background: "#6E89FF",
                        color: "white"
                    }}>
                    <ArrowBackIcon />
                </IconButton>
            </Link>
        </div>
    )
}

export default AppLandingPage