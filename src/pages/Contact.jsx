import React, { useState, useEffect } from 'react'
import './css/Contact.css'
import ContactForm from '../component/ContactForm/ContactForm'
import SimpleAlert from '../component/Alert/Alert';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div className='contact-form-page'>
            {error | success ? <div className="alertmsg">
                <SimpleAlert severity={error ? "error" : success ? "success" : ""} />
            </div> : <></>}
            <ContactForm submitting={submitting} setSubmitting={setSubmitting} setSuccess={setSuccess} setError={setError} />
            {submitting ? <div id="popup1" className="overlay">
                <div className="popup">
                    <h3 className="content"> <i className="fa-solid fa-circle-notch"></i>
                    </h3>
                </div>
            </div> : <></>}
        </div>
    )
}

export default Contact