import './css/Contact.css'
import React, { useState, useEffect } from 'react'
import SimpleAlert from '../component/Alert/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ContactForm from '../component/ContactForm/ContactForm';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = 'Contact | Logic Realm';
    }, [])

    return (
        <div className='contact-form-page'>
            {error | success ? <div className="alertmsg">
                <SimpleAlert severity={error ? "error" : success ? "success" : ""} />
            </div> : <></>}
            <ContactForm setSubmitting={setSubmitting} setSuccess={setSuccess} setError={setError} />
            {submitting ? <div id="popup1" className="overlay">
                <div className="popup">
                    <h3 className="content">
                        <CircularProgress />
                    </h3>
                </div>
            </div> : <></>}
        </div>
    )
}

export default Contact