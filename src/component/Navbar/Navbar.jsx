import './Navbar.css'
import React, { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', () => {
            document.documentElement.setAttribute(
                'data-theme',
                checkbox.checked ? 'dark' : 'light'
            );
        });
    }, []);
    return (
        <nav className="navbar">
            <div className="logo-section">
                <img className='main-icon' src="/icon.png" />
                <div className="logo">
                    <p style={{ color: "var(--accent)" }}>Logic</p>&nbsp;
                    <p style={{ color: "var(--primary)" }}>Realm</p>
                </div>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Softwares</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
                <li className='toggle' id='themeToggle'>
                    <input type="checkbox" className="checkbox" id="checkbox" />
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