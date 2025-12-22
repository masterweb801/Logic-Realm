import { useState, useEffect } from 'react'
import styles from './ContactForm.module.css'
import { motion as Motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ setSubmitting, setSuccess, setError }) => {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_API_EMAIL);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (state.succeeded) {
            setSuccess(true);
            setSubmitting(false);
            setName("");
            setEmail("");
            setCompany("");
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
        <div className={styles["container"]}>
            <div className={styles["form-container"]}>
                <Motion.div
                    className={styles["left-container"]}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <div className={styles["left-inner-container"]}>
                        <h2 className={styles["h2"]}>Let's Chat</h2>
                        <p>Whether you have a question, want to start a project or simply want to connect.</p>
                        <br />
                        <p>Feel free to send me a message in the contact form</p>
                    </div>
                </Motion.div>

                <div className={styles["right-container"]}>
                    <Motion.div
                        className={styles["right-inner-container"]}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <form
                            onSubmit={(e) => {
                                setSubmitting(true);
                                handleSubmit(e);
                            }}
                            className={styles["form"]}
                        >
                            <h2 className={styles["lg-view"]} style={{ color: '#000' }}>Contact</h2>
                            <h2 className={styles["sm-view"]}>Let's Chat</h2>
                            <p style={{ color: '#000' }} className={styles["p"]}>* Required</p>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                placeholder="Name *"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles["input"]}
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                id="email"
                                name="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles["input"]}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <input
                                id='company'
                                type="text"
                                name='company'
                                placeholder="Company"
                                autoComplete='company'
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className={styles["input"]}
                            />
                            <textarea
                                id="message"
                                placeholder="Message"
                                name="message"
                                required
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={styles["textarea"]}
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <Motion.button
                                type="submit"
                                disabled={state.submitting}
                                style={{ cursor: state.submitting ? "not-allowed" : "pointer" }}
                                className={styles["button"]}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </Motion.button>
                        </form>
                    </Motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;