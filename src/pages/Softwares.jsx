import React, { useState, useEffect, useCallback } from 'react'
import './css/Softwares.css'
import AppCard from '../component/AppCard/AppCard'
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';


const Softwares = ({ contextSoftwares, setContextSoftwares }) => {
    const [appList, setAppList] = useState([]);
    const [filteredAppList, setFilteredAppList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [searchFocused, setSearchFocused] = useState(false);
    const [cache, setCache] = useState({});

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
        setAppList(data.response_data);
        setContextSoftwares(data.response_data);
        setLoading(false);
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

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Softwares | Logic Realm';
    }, []);
    return (
        <div className="softwares-page">
            {!loading ? <>
                <section className="store-hero">
                    <h1 className="title">All Apps</h1>
                    <div className="hero-left">
                        <label htmlFor='search' className="subtitle">Discover, try, and install powerful apps for every need.</label>
                        <div className="hero-controls">
                            <form className="search-wrap" action="#" onSubmit={(e) => { e.preventDefault() }}>
                                <input
                                    className="search"
                                    id='search'
                                    value={query}
                                    onChange={(e) => { setQuery(e.target.value) }}
                                    placeholder="Search apps, categories or features"
                                    aria-label="Search apps"
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                                <button className="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                            {searchFocused && <div className="search-suggestions">
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
                            </div>}
                        </div>
                    </div>
                </section>

                <section className="cards-grid" role="list" aria-label="App results">

                    {filteredAppList.length > 0 ? filteredAppList.map((app, index) => {
                        if (index < 24) {
                            return <AppCard key={index} app={app} />
                        } else {
                            return null;
                        }
                    }) : appList.map((app, index) => {
                        if (index < 24) {
                            return <AppCard key={index} app={app} />
                        } else {
                            return null;
                        }
                    })}

                </section>
            </> : <CircularProgress />}
        </div>
    )
}

export default Softwares