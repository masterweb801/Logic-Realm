import './css/Home.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import DesignTeam from '../assets/design-team.svg'
import SoftDev from '../assets/hero-software-dev.svg'
import MobileDev from '../assets/mobile-development.svg'
import EnterpriseSoftware from '../assets/enterprise-software.svg'
import ScrollCard from '../component/ScrollCard/ScrollCard.jsx'

const Home = () => {
  const textVarients = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const h2Varients = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Logic Realm';
  }, [])

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <Motion.h1
            variants={textVarients}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            We build the software your business deserves
          </Motion.h1>
          <Motion.p
            variants={textVarients}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            Custom software development, modern web & mobile solutions, and ongoing support — we partner with you every step of the way.
          </Motion.p>
          <Link to="/contact">
            <Motion.button
              className="cta-button"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.4 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              Start a Project
            </Motion.button>
          </Link>
        </div>
        <div className="hero-image">
          <Motion.img
            src={SoftDev}
            alt="Software development illustration"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.8 }}
          />
        </div>
      </section>

      <section className="services even-section">
        <Motion.h2
          variants={h2Varients}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
          Our Services
        </Motion.h2>
        <Motion.p
          className="services-subtitle"
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.5 }}
        >
          We offer a complete suite of services to take your product from concept to launch and beyond.
        </Motion.p>
        <ul className="service-cards">
          <ScrollCard direction={"left"} className={"card"}>
            <div className="img-bg-2">
              <img
                src={MobileDev}
                alt="Illustration of a mobile and web application interface"
                className="card-illustration"
              />
            </div>
            <div className="card-content">
              <h3>Web & Mobile Apps</h3>
              <p>Full-stack web applications and native/hybrid mobile apps tailored to your business needs.</p>
            </div>
          </ScrollCard>
          <ScrollCard direction={"bottom"} className={"card"}>
            <div className="img-bg-2">
              <img
                src={EnterpriseSoftware}
                alt="Illustration of robust systems and enterprise software"
                className="card-illustration"
              />
            </div>
            <div className="card-content">
              <h3>Enterprise Software</h3>
              <p>Robust systems with scalability, integrations, & automation for enterprise-level operations.</p>
            </div>
          </ScrollCard>
          <ScrollCard direction={"right"} className={"card"}>
            <div className="img-bg-2">
              <img
                src={DesignTeam}
                alt="Illustration of a UI/UX design team collaborating"
                className="card-illustration"
              />
            </div>
            <div className="card-content">
              <h3>UI/UX Design</h3>
              <p>User-centric design that ensures usability, accessibility & delightful experiences.</p>
            </div>
          </ScrollCard>
        </ul>
      </section>

      <section className="why-us">
        <Motion.h2
          variants={h2Varients}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          Why Choose Us
        </Motion.h2>
        <ul className="why-us-list">
          <Motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <strong>Agile Methodology</strong> - Fast iterations, transparent process.
          </Motion.li>
          <Motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <strong>Dedicated Team</strong> - Experienced engineers, designers & QA.
          </Motion.li>
          <Motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            <strong>Continuous Support</strong> - We don`t just build, we maintain & evolve.
          </Motion.li>
        </ul>
      </section>

      <section className="portfolio">
        <Motion.h2
          variants={h2Varients}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
          Featured Projects
        </Motion.h2>
        <div className="projects-grid">
          <Link to="/softwares/photo-point">
            <ScrollCard className={"project"} direction={"left"}>
              <div className="img-bg">
                <img
                  src="https://raw.githubusercontent.com/masterweb801/Photo-Point/refs/heads/main/icon.ico"
                  alt="Icon for Photo Point software"
                  className="project-icon"
                />
              </div>
              <h4>Photo Point</h4>
              <p>A software to convert PPTX to Image.</p>
            </ScrollCard>
          </Link>
          <Link to="/softwares/typo">
            <ScrollCard className={"project"} direction={"bottom"}>
              <div className="img-bg">
                <img
                  src="https://github.com/masterweb801/Typo/blob/main/app/src/main/ic_launcher-playstore.png?raw=true"
                  alt="Icon for Typo mobile app"
                  className="project-icon"
                />
              </div>
              <h4>Typo</h4>
              <p>A mobile app for wireless typing.</p>
            </ScrollCard>
          </Link>
          <Link to="/softwares/asfa">
            <ScrollCard className={"project"} direction={"right"}>
              <div className="img-bg">
                <img
                  src="https://github.com/masterweb801/ASFA/blob/main/icon-png.png?raw=true"
                  alt="Icon for ASFA"
                  className="project-icon"
                />
              </div>
              <h4>ASFA</h4>
              <p>Access System From Anywhere.</p>
            </ScrollCard>
          </Link>
        </div>
      </section>

      <section className="contact-cta even-section" id="contact-sec">
        <Motion.h2
          variants={h2Varients}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          Ready to Get Started?
        </Motion.h2>
        <Motion.p
          variants={h2Varients}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.45 }}
        >
          Let`s talk about your next project and how we can help you bring it to life.
        </Motion.p>
        <Motion.div
          variants={h2Varients}
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          transition={{ delay: 0.5 }}
        >
          <Link to="/contact">
            <button className="cta-button">
              Book a Free Consultation
            </button>
          </Link>
        </Motion.div>
      </section>
    </div>
  )
}

export default Home