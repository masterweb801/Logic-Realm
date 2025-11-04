import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/AppLandingPage.css';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../component/LandingPage/Header/Header.jsx';
import Description from '../component/LandingPage/Description/Description.jsx';
import Screenshots from '../component/LandingPage/SS/Screenshots.jsx';
import Download from '../component/LandingPage/Download/Download.jsx';
import Info from '../component/LandingPage/Info/Info.jsx';

const AppLandingPage = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [appDetails, setAppDetails] = useState({})

    const getAppData = async (slug) => {
        if (!slug) return null;

        else {
            setLoading(true);
            let url = `${import.meta.env.VITE_API_URL}/api/routes/getAppDetails.php`
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug })
            });
            let data = await response.json();
            setAppDetails(data.response_data);
            setLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getAppData(slug);
    }, [slug]);

    return (
        <div className="app-landing-page">
            {loading ? <CircularProgress />
                : <div className='app-landing-container'>
                    <Header img={appDetails.img} name={appDetails.name} desc={appDetails.sdesc} />
                    <div className="app-landing-grid">
                        <div className="aplan-con">
                            <Description />
                            <Screenshots />
                        </div>
                        <div className="aplan-con-2">
                            <Download />
                            <Info />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AppLandingPage