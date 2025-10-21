import React, { useEffect } from 'react'
import './css/Contact.css'
import ContactForm from '../component/ContactForm/ContactForm'

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById("contact-form-r").reset()
    }, [])

    return (
        <div className='contact-form-page'>
            <ContactForm />
        </div>
    )
}

export default Contact