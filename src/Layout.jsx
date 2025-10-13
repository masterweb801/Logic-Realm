import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

function Layout() {
    return (
        <div className="app-container">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout