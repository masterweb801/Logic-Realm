import React, { useState, useEffect } from 'react'
import './css/Softwares.css'
import AppCard from '../component/AppCard/AppCard'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Software = {
    id: 1,
    name: "Photo Point",
    desc: "A powerful tool to convert PPT Slides to Images seamlessly.",
    size: "15 MB",
    icon: "https://raw.githubusercontent.com/masterweb801/Photo-Point/refs/heads/main/icon.ico"
}

const Softwares = () => {
    const [appList, setAppList] = useState([])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAppList([
            Software,
        ])
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
                            <button type='submit' className="search-btn"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="cards-grid" role="list" aria-label="App results">

                {appList.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}

            </section>

            <section className="pagination-row">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </section>

        </div>
    )
}

export default Softwares