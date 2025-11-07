import './Navbar.css'
import React, { useState, useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/icon.png'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
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
                <div className="menu-toggle">
                    <label htmlFor="menuToggle">
                        <MenuIcon />
                    </label>
                </div>
            </div>
            <input type="checkbox" name="menuToggle" className="menuToggle" id="menuToggle" />
            <ul>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/">Home</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/softwares">Softwares</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/about">About</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/contact">Contact</NavLink></li>
                <li className='toggle' id='themeToggle'>
                    <label htmlFor="checkbox" className='modeTogLab'>Toggle Mode</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(Boolean(e.target.checked))}
                    />
                    <label htmlFor="checkbox" className="checkbox-label">
                        <LightModeIcon />
                        <DarkModeIcon />
                        <span className="ball"></span>
                    </label>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar