import './Footer.css'
import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
    const [Scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (typeof window === 'undefined') return;
        let height = window.screen.height;
        if (window.scrollY > document.body.scrollHeight - 1.25 * height) {
            setScrolled(false);
        } else {
            setScrolled(window.scrollY > 0.75 * height);
        }
    }

    const scrollToTop = () => {
        if (typeof window === 'undefined') return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h3 className="footer-title"> &gt; Logic Realm &lt; </h3>
                    <p className="footer-desc">
                        Crafting intelligent, efficient, and scalable software solutions that empower innovation and reliability.
                    </p>

                    {/* <div className="footer-contact">
                        <a href="mailto:support@logicrealm.com">support@logicrealm.com</a>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com/logicrealm" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://linkedin.com/company/lexaun-limited" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://x.com/lexaunlimited" target="_blank" rel="noreferrer">X</a>
                    </div> */}

                </div>

                <button className={Scrolled ? "back-to-top actop" : "back-to-top"} onClick={scrollToTop}>
                    <ArrowUpwardIcon /> &nbsp; Back to Top
                </button>
            </div>

            <div className="footer-bottom">
                <div className="copyr">
                    <p>© 2023 Logic Realm. All rights reserved.</p>
                </div>
                <div className="footer-powered">
                    <span>Powered by</span>
                    <a className='l-link' href="http://lexaun.rf.gd/" target='_blank' title='Lexaun Limited' rel="noreferrer">
                        <img src='/lexaun.webp' className="footer-logo" alt='Lexaun Limited Logo' fetchpriority='low' loading='lazy' /> &nbsp;
                        <span className="footer-company">Lexaun Limited</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
