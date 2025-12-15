import './Navbar.css';
import { useState, useLayoutEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    useLayoutEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getInitialMode = () => {
        try {
            const saved = localStorage.getItem('docMode');
            if (saved === 'dark') return true;
            if (saved === 'light') return false;
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch {
            return false;
        }
    };

    const [darkMode, setDarkMode] = useState(getInitialMode);

    useLayoutEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('docMode', theme); } catch { /* ignore storage errors */ }
    }, [darkMode]);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo-section">
                    <img className='main-icon' src={Logo} />
                    <div className="logo">
                        <p style={{ color: "var(--accent)" }}>Logic</p>&nbsp;
                        <p style={{ color: "var(--primary)" }}>Realm</p>
                    </div>
                </div>
            </div>

            <div className="mobBtn">

                <div className='toggle' id='themeToggle'>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(Boolean(e.target.checked))}
                    />
                    <label htmlFor="checkbox" className="checkbox-label">
                        <LightModeIcon style={{ height: "1.5rem" }} />
                        <BedtimeIcon style={{ height: "1.5rem" }} />
                    </label>
                </div>

                <div className="menu-toggle">
                    <label htmlFor="menuToggle" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen
                            ? <MenuIcon /> :
                            <ClearIcon />
                        }
                    </label>
                </div>
            </div>

            <input type="checkbox" name="menuToggle" className="menuToggle" id="menuToggle" checked={isOpen} onChange={() => { }} />

            <ul>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/">Home</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/softwares">Softwares</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/about">About</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar