import React from 'react'
import './css/Home.css'
import SoftDev from '../assets/hero-software-dev.svg'
import MobileDev from '../assets/mobile-development.svg'
import EnterpriseSoftware from '../assets/enterprise-software.svg'
import DesignTeam from '../assets/design-team.svg'

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>We build the software your business deserves</h1>
          <p>Custom software development, modern web & mobile solutions, and ongoing support — we partner with you every step of the way.</p>
          <button className="cta-button">Start a Project</button>
        </div>
        <div className="hero-image">
          <img src={SoftDev} alt="Software development illustration" />
        </div>
      </section>

      <section className="services even-section">
        <h2>Our Services</h2>
        <p className="services-subtitle">We offer a complete suite of services to take your product from concept to launch and beyond.</p>
        <ul className="service-cards">
          <li className="card">
            <img
              src={MobileDev}
              alt="Illustration of a mobile and web application interface"
              className="card-illustration"
            />
            <div className="card-content">
              <h3>Web & Mobile Apps</h3>
              <p>Full-stack web applications and native/hybrid mobile apps tailored to your business needs.</p>
            </div>
          </li>
          <li className="card">
            <img
              src={EnterpriseSoftware}
              alt="Illustration of robust systems and enterprise software"
              className="card-illustration"
            />
            <div className="card-content">
              <h3>Enterprise Software</h3>
              <p>Robust systems with scalability, integrations, & automation for enterprise-level operations.</p>
            </div>
          </li>
          <li className="card">
            <img
              src={DesignTeam}
              alt="Illustration of a UI/UX design team collaborating"
              className="card-illustration"
            />
            <div className="card-content">
              <h3>UI/UX Design</h3>
              <p>User-centric design that ensures usability, accessibility & delightful experiences.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="why-us">
        <h2>Why Choose Us</h2>
        <ul className="why-us-list">
          <li><strong>Agile Methodology</strong> - Fast iterations, transparent process.</li>
          <li><strong>Dedicated Team</strong> - Experienced engineers, designers & QA.</li>
          <li><strong>Continuous Support</strong> - We don`t just build, we maintain & evolve.</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <img
              src="https://raw.githubusercontent.com/masterweb801/Photo-Point/refs/heads/main/icon.ico"
              alt="Icon for Photo Point software"
              className="project-icon"
            />
            <h4>Photo Point</h4>
            <p>A software to convert PPTX to Image.</p>
          </div>
          <div className="project">
            <img
              src="https://github.com/masterweb801/Typo/blob/main/app/src/main/ic_launcher-playstore.png?raw=true"
              alt="Icon for Typo mobile app"
              className="project-icon"
            />
            <h4>Typo</h4>
            <p>A mobile app for wireless typing.</p>
          </div>
          <div className="project">
            <img
              src="https://github.com/masterweb801/HiFied/raw/main/icon.ico?raw=true"
              alt="Icon for HiFied software"
              className="project-icon"
            />
            <h4>HiFied</h4>
            <p>A software to view Wifi Passwords.</p>
          </div>
        </div>
      </section>

      <section className="contact-cta even-section">
        <h2>Ready to Get Started?</h2>
        <p>Let`s talk about your next project and how we can help you bring it to life.</p>
        <button className="cta-button">Book a Free Consultation</button>
      </section>
    </div>
  )
}

export default Home