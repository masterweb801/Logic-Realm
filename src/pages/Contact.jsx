import './css/Contact.css'
import { useState } from 'react'
import SEO from '../component/SEO/SEO';
import SimpleAlert from '../component/Alert/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ContactForm from '../component/ContactForm/ContactForm';
import { motion as Motion, AnimatePresence } from 'motion/react';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Motion.div
            className='contact-form-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <SEO
                name="Contact"
                description="Get in touch with us for inquiries, support, or collaboration opportunities."
                route="/contact"
                image="/seo/contact_page.png"
            />

            <AnimatePresence>{
                (error || success) &&
                <Motion.div
                    className="alertmsg"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                >
                    <SimpleAlert severity={error ? "error" : success ? "success" : "info"} />
                </Motion.div>
            }</AnimatePresence>

            <Motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
                <ContactForm setSubmitting={setSubmitting} setSuccess={setSuccess} setError={setError} />
            </Motion.div>

            <AnimatePresence>{
                submitting &&
                <Motion.div
                    id="popup1"
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Motion.div
                        className="popup"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <h3 className="content">
                            <CircularProgress />
                        </h3>
                    </Motion.div>
                </Motion.div>
            }</AnimatePresence>

        </Motion.div>
    )
}

export default Contact