import './css/AppLandingPage.css';
import Box from '@mui/material/Box';
import SEO from '../component/SEO/SEO.jsx';
import { motion as Motion } from 'motion/react';
import IconButton from '@mui/material/IconButton';
import { Link, useParams } from 'react-router-dom';
import Info from '../component/LandingPage/Info/Info.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState, Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../component/LandingPage/Header/Header.jsx';
import Download from '../component/LandingPage/Download/Download.jsx';
// import Screenshots from '../component/LandingPage/SS/Screenshots.jsx';
import Description from '../component/LandingPage/Description/Description.jsx';

const SimilarApps = lazy(() => import('../component/LandingPage/SimilarApps/SimilarApps.jsx'));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const AppLandingPage = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [appDetails, setAppDetails] = useState({});

    const getAppData = async (slug) => {
        if (!slug) return null;

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
                if (typeof window !== 'undefined') {
                    const existing = JSON.parse(localStorage.getItem("allSoftwares") || "{}");
                    existing[slug] = data.response_data;
                    localStorage.setItem("allSoftwares", JSON.stringify(existing));
                }
            } else {
                console.warn('No response_data for slug:', slug, data);
            }
        } catch (err) {
            console.error('Failed to fetch app details:', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        try {
            const raw = typeof window !== 'undefined' ? localStorage.getItem("allSoftwares") : null;
            const allSoftwares = raw ? JSON.parse(raw) : {};
            if (allSoftwares && allSoftwares[slug]) {
                setAppDetails(allSoftwares[slug]);
                setLoading(false);
            }
        } catch (err) {
            console.error('Failed to read cache, fetching from API:', err);
        } finally {
            getAppData(slug);
        }
    }, [slug]);

    return (
        <div className="app-landing-page">
            <SEO
                name={`${appDetails?.name} - ${appDetails?.sdesc} | Logic Realm`}
                oname={`${appDetails?.name} - ${appDetails?.sdesc} by Logic Realm`}
                route={`/softwares/${slug}`}
                description={appDetails?.sdesc}
                image={`/seo/${slug}_page.png`}
                key={slug}
            />
            <Link to='/softwares' className='backBtn'>
                <IconButton
                    aria-label="Go Back"
                    title='Go Back'
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

            {loading ? <CircularProgress /> :
                <Motion.div
                    className='app-landing-container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Header
                        img={appDetails.img}
                        name={appDetails.name}
                        desc={appDetails.sdesc}
                        variants={itemVariants}
                    />
                    <div className="app-landing-grid">
                        <div className="aplan-con">
                            <Description
                                descP={appDetails.descP}
                                descS={appDetails.descS}
                                features={appDetails.features}
                                steps={appDetails.steps}
                                variants={itemVariants}
                            />
                            {/* <Screenshots /> */}
                        </div>
                        <div className="aplan-con-2">
                            <Download
                                platforms={appDetails.platforms}
                                dlink={appDetails.dlink}
                                vers={appDetails.vers}
                                github={appDetails.github}
                                variants={itemVariants}
                            />
                            <Info
                                size={appDetails.size}
                                platforms={appDetails.platforms}
                                category={appDetails.category}
                                variants={itemVariants}
                            />
                        </div>
                    </div>
                    <Suspense
                        fallback={
                            <Box sx={{ width: '100%', height: '1rem', marginTop: '2rem' }}>
                                <LinearProgress color='info' style={{ height: '0.75rem' }} />
                            </Box>
                        }>
                        <SimilarApps slug={slug} />
                    </Suspense>
                </Motion.div>
            }
        </div>
    )
}

export default AppLandingPage