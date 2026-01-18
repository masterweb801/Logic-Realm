import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion as Motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('docMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = saved ? saved === 'dark' : prefersDark;
        setDarkMode(initialTheme);

        document.documentElement.setAttribute('data-theme', initialTheme ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('docMode', theme);
    }, [darkMode]);

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: {
            opacity: 1,
            x: "0%",
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <Motion.nav
            className="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <div className="logo-container">
                <div className="logo-section" title="Logic Realm">
                    <Motion.img
                        className='main-icon'
                        src='/icon.svg'
                        alt="Logic Realm Logo"
                        fetchpriority='high'
                        whileHover={{ rotate: 10, scale: 1.1 }}
                    />

                    {/* Lighthouse accessibility warning ignored for logo text due to brand colors */}
                    <div className="logo">
                        <p style={{ color: "var(--accent)" }}>Logic</p>&nbsp;
                        <p style={{ color: "var(--primary)" }}>Realm</p>
                    </div>
                </div>
            </div>

            <div className="mobBtn">

                <div className='toggle' id='themeToggle' title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    <div
                        className="checkbox-label"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <Motion.div
                            animate={{ rotate: darkMode ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {darkMode ? <BedtimeIcon /> : <LightModeIcon />}
                        </Motion.div>
                    </div>
                </div>

                <div className="menu-toggle">
                    <Motion.div
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.8 }}
                    >
                        {!isOpen ? <MenuIcon /> : <ClearIcon style={{ color: "white" }} />}
                    </Motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Motion.ul
                        className="nav-links-mobile"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {['Home', 'Softwares', 'About', 'Contact'].map((item) => (
                            <Motion.li key={item} variants={linkVariants}>
                                <NavLink
                                    className={(e) => e.isActive ? "act" : ""}
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </NavLink>
                            </Motion.li>
                        ))}
                    </Motion.ul>
                )}
            </AnimatePresence>

            <ul className="nav-links-desktop">
                <Motion.li whileHover={{ scale: 1.05 }}><NavLink className={(e) => e.isActive ? "act" : ""} to="/">Home</NavLink></Motion.li>
                <Motion.li whileHover={{ scale: 1.05 }}><NavLink className={(e) => e.isActive ? "act" : ""} to="/softwares">Softwares</NavLink></Motion.li>
                <Motion.li whileHover={{ scale: 1.05 }}><NavLink className={(e) => e.isActive ? "act" : ""} to="/about">About</NavLink></Motion.li>
                <Motion.li whileHover={{ scale: 1.05 }}><NavLink className={(e) => e.isActive ? "act" : ""} to="/contact">Contact</NavLink></Motion.li>
            </ul>
        </Motion.nav>
    )
}

export default Navbar