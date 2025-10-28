import React, { useState, useEffect } from 'react'
import './css/Softwares.css'
import AppCard from '../component/AppCard/AppCard'
import SearchIcon from '@mui/icons-material/Search';


const Softwares = () => {
    const [appList, setAppList] = useState([])

    const getApps = async () => {
        let url = `${import.meta.env.VITE_API_URL}/api/routes/getAllApps.php`
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        let data = await response.json();
        console.log(data.response_data)
        setAppList(data.response_data);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getApps();
    }, [])
    return (
        <div className="softwares-page">
            <section className="store-hero">
                <h1 className="title">All Apps</h1>
                <div className="hero-left">
                    <label htmlFor='search' className="subtitle">Discover, try, and install powerful apps for every need.</label>
                    <div className="hero-controls">
                        <form className="search-wrap" action="#">
                            <input className="search" id='search' placeholder="Search apps, categories or features" aria-label="Search apps" />
                            <button type='submit' className="search-btn">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="cards-grid" role="list" aria-label="App results">

                {appList.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}

            </section>
        </div>
    )
}

export default Softwares