import './css/About.css';
import { useEffect } from 'react';
import { motion as Motion } from 'motion/react';
import ScrollCard from '../component/ScrollCard/ScrollCard.jsx';

const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ZapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const GemIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="m12 22 4-13-3-6" />
        <path d="M12 22 8 9l3-6" />
    </svg>
);

const ValueCard = ({ icon, title, description, direction }) => (
    <ScrollCard className="values-card" direction={direction} scroll={0.4}>
        <div className="icon-wrapper">
            {icon}
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </ScrollCard>
);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const imageReveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'About | Logic Realm';
    }, [])
    return (
        <div className="about-page">
            <section className="about-hero">
                <Motion.div
                    className="about-container"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <Motion.h1 variants={fadeInUp}>Crafting the Future of <span>Digital Solutions</span>.</Motion.h1>
                    <Motion.p variants={fadeInUp}>At Logic Realm, we don't just build software. We architect ecosystems that empower businesses to thrive in a digital-first world.</Motion.p>
                </Motion.div>
            </section>

            <section className="about-story">
                <div className="about-story-container">
                    <div className="grid">
                        <Motion.div
                            className="prose"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Our Journey</h2>
                            <p>Founded in a small garage with a big idea, Logic Realm began as a quest to simplify the complexities of the digital landscape. We saw a world where technology was often a barrier, not an enabler. Our mission was to change that.</p>
                            <p>Through years of dedication, countless lines of code, and a relentless focus on our clients' success, we've grown into a trusted partner for businesses worldwide. Our story is written in the success of our clients and the innovative solutions we've built together.</p>
                        </Motion.div>
                        <Motion.div
                            className="ab-relative"
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <img src="https://placehold.co/600x400/718e80/FFFFFF?text=Innovation+Hub" alt="Logic Realm's modern office" />
                            <div className="ab-absolute"></div>
                        </Motion.div>
                    </div>
                </div>
            </section >

            <section className="value-section">
                <div className="value-container">
                    <Motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        The Core of Our Culture
                    </Motion.h2>
                    <Motion.p
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.4 }}
                    >
                        These are the principles that guide our decisions, our collaborations, and our commitment to excellence.
                    </Motion.p>
                    <div className="values-grid">
                        <ValueCard
                            icon={<ZapIcon className="w-8 h-8" />}
                            title="Innovate Fearlessly"
                            description="We constantly push boundaries and embrace change to stay ahead of the curve."
                            direction="left"
                        />
                        <ValueCard
                            icon={<UsersIcon className="w-8 h-8" />}
                            title="Customer-Centric"
                            description="Our clients are our partners. Their success is the ultimate measure of our own."
                            direction="left"
                        />
                        <ValueCard
                            icon={<GemIcon className="w-8 h-8" />}
                            title="Uncompromising Quality"
                            description="We are obsessed with quality, from the first line of code to the final user interaction."
                            direction="left"
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>}
                            title="Radical Transparency"
                            description="Open communication and honesty are the cornerstones of our relationships."
                            direction="right"
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>}
                            title="Empowered Ownership"
                            description="Every team member takes initiative and responsibility for our collective goals."
                            direction="right"
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>}
                            title="Collective Growth"
                            description="We learn, grow, and succeed as one team, celebrating both individual and group wins."
                            direction="right"
                        />
                    </div>
                </div>
            </section>

            {/* <section className="ct-section">
                <div className="ct-container">
                    <h2>Ready to Build the Future?</h2>
                    <p>We are always looking for passionate and talented individuals to join our journey. If you're driven by innovation and thrive on challenge, we'd love to hear from you.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="#" className="ct-button">Explore Careers</a>
                    </div>
                </div>
            </section> */}

        </div >
    );
}
