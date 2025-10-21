import React, { useState, useEffect } from 'react'
import './css/Contact.css'
import ContactForm from '../component/ContactForm/ContactForm'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitClick, setSubmitClick] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div className='contact-form-page'>
            <ContactForm isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} setSuccess={setSuccess} setSubmitClick={setSubmitClick} setError={setError} />
            {submitClick ? <div id="popup1" className="overlay">
                <div className="popup">
                    {error ? <h2>Something Went Wrong!</h2> : <></>}
                    {success | error ? <button className='close' onClick={() => { setSubmitClick(false); setSuccess(false) }}>&times;</button> : <></>}
                    <h3 className="content">
                        {isSubmitting ? <i className="fa-solid fa-circle-notch"></i> : <></>}
                        {success ? <><i className="fa-regular fa-circle-check"></i>
                            Done</> : <></>}
                        {error ? <i className="fa-regular fa-circle-xmark"></i> : <></>}
                    </h3>
                </div>
            </div> : <></>}
        </div>
    )
}

export default Contact