import './css/Softwares.css'
import SEO from '../component/SEO/SEO.jsx'
import AppCard from '../component/AppCard/AppCard'
import SearchIcon from '@mui/icons-material/Search';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useState, useEffect, useCallback } from 'react';
import TopProgress from '../component/TopProgress/TopProgress';
import { motion as Motion, AnimatePresence } from 'motion/react';

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const noResultsVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const Softwares = ({ contextSoftwares, setContextSoftwares }) => {
    const [query, setQuery] = useState("");
    const [cache, setCache] = useState({});
    const [appList, setAppList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredAppList, setFilteredAppList] = useState([]);
    const [searchFocused, setSearchFocused] = useState(false);

    const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const highlightName = (name) => {
        if (!query) return name;
        const re = new RegExp(`(${escapeRegExp(query)})`, 'ig');
        return name.replace(re, '<strong>$1</strong>');
    };

    const getApps = useCallback(async () => {
        setLoading(true);
        let url = `${import.meta.env.VITE_API_URL}api/routes/getAllApps.php`
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        let data = await response.json();
        if (data && data.response_data) {
            let apps = data.response_data.reverse();
            setAppList(apps);
            setContextSoftwares(apps);
            setLoading(false);
        }
    }, [setContextSoftwares]);

    const handleSearch = useCallback(() => {
        if (cache[query.toLowerCase()]) {
            setFilteredAppList(cache[query.toLowerCase()]);
            return;
        }
        let filteredApps = appList.filter((app) => {
            return app.name.toLowerCase().includes(query.toLowerCase())
        });
        setFilteredAppList(filteredApps);
        setCache(prevCache => ({
            ...prevCache,
            [query.toLowerCase()]: filteredApps
        }));
    }, [appList, cache, query]);

    useEffect(() => {
        const time = setTimeout(handleSearch, 400);
        return () => clearTimeout(time);
    }, [query, handleSearch]);

    useEffect(() => {
        if (contextSoftwares.length > 0) {
            setAppList(contextSoftwares);
        } else {
            getApps();
        }
    }, [contextSoftwares, getApps]);

    return <Motion.div className="softwares-page" {...pageTransition}>
        <SEO
            name="Software Products - Logic Realm"
            oname="Explore Software Products by Logic Realm"
            description="Discover a wide range of custom software applications designed to meet your unique needs. Explore our collection of innovative solutions for web, mobile, and desktop platforms."
            route="/softwares"
            image="/seo/softwares_page.png"
        />
        <section className="store-hero">
            <Motion.h1
                className="title"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                All Apps
            </Motion.h1>
            <div className="hero-left">
                <label htmlFor='search' className="subtitle">Discover, try, and install powerful apps for every need.</label>
                <div className="hero-controls">
                    <Motion.form
                        className="search-wrap"
                        action="#"
                        onSubmit={(e) => { e.preventDefault() }}
                        animate={{ scale: searchFocused ? 1.02 : 1 }}
                    >
                        <input
                            className="search"
                            id='search'
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                            placeholder="Search apps, categories or features"
                            aria-label="Search apps"
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            autoComplete='off'
                        />
                        <button className="search-btn">
                            <SearchIcon />
                        </button>
                    </Motion.form>
                    <AnimatePresence>
                        {searchFocused && query != "" && filteredAppList.length > 0 &&
                            <Motion.div
                                className="search-suggestions"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {filteredAppList.map((item, index) => {
                                    return <button
                                        key={index}
                                        className="suggestion-item"
                                        onMouseDown={() => {
                                            setQuery(item.name);
                                        }}
                                        dangerouslySetInnerHTML={{ __html: highlightName(item.name) }}
                                    />
                                })}
                            </Motion.div>}
                    </AnimatePresence>
                </div>
            </div>
        </section>


        {!loading ? <AnimatePresence mode='wait'>
            {filteredAppList.length > 0 || query === "" ?
                <Motion.section
                    key="grid"
                    className="cards-grid"
                    role="list"
                    aria-label="App results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                >
                    {(query ? filteredAppList : appList).slice(0, 24).map((app) => (
                        <Motion.div
                            key={app.slug || app.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AppCard app={app} />
                        </Motion.div>
                    ))}
                </Motion.section> :
                <Motion.div
                    key="no-results"
                    className="no-results-container"
                    variants={noResultsVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                >
                    <div className="illustration-wrapper">
                        <ZoomOutIcon />
                    </div>
                    <h3>No results for "{query}"</h3>
                    <p>Try checking your spelling or using different keywords.</p>
                </Motion.div>}
        </AnimatePresence> : <TopProgress />}
    </Motion.div>
}

export default Softwares