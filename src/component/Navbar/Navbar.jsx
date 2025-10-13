import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/icon.png'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            darkMode ? 'dark' : 'light'
        );
    }, [darkMode]);

    const handleThemeChange = (e) => {
        setDarkMode(e.target.checked);
    };
    return (
        <nav className="navbar">
            <div className="logo-section">
                <img className='main-icon' src={Logo} />
                <div className="logo">
                    <p style={{ color: "var(--accent)" }}>Logic</p>&nbsp;
                    <p style={{ color: "var(--primary)" }}>Realm</p>
                </div>
            </div>
            <ul>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/">Home</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/softwares">Softwares</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/support">Support</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "act" : ""} to="/about">About</NavLink></li>
                <li className='toggle' id='themeToggle'>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={darkMode}
                        onChange={handleThemeChange}
                    />
                    <label htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </label>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar