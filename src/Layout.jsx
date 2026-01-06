import { Suspense, useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom';
import TopProgress from './component/TopProgress/TopProgress';

function Layout() {
    const location = useLocation();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className="app-container">
            <header>
                <Navbar />
            </header>
            <main>
                <Suspense fallback={<TopProgress />} key={location.pathname}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout