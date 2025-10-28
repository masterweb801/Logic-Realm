import React, { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ setSubmitting, setSuccess, setError }) => {
    const [state, handleSubmit] = useForm("xovpezen");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (state.succeeded) {
            setSuccess(true);
            setSubmitting(false);
            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } else if (state.errors) {
            setError(true);
            setSubmitting(false);

            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    }, [state.succeeded, state.errors, setSuccess, setError, setSubmitting]);

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <form onSubmit={(e) => {
                setSubmitting(true);
                handleSubmit(e);
            }}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        style={{ width: "100%", padding: "8px", marginTop: "5px", resize: "none" }}
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    style={{
                        background: "var(--accent)",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: state.submitting ? "not-allowed" : "pointer"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;