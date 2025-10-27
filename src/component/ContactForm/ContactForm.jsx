import React, { useState } from "react";

function ContactForm({ submitting, setSubmitting, setSuccess, setError }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const apiKey = import.meta.env.VITE_MAIL_API;

        if (!apiKey) {
            console.error('MAIL_API is not set');
            setSubmitting(false);
            setError(true);
            setTimeout(() => { setError(false); }, 5000);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: apiKey,
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitting(false);
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitting(false);
                setError(true);
            }
        } catch (error) {
            setSubmitting(false);
            console.log(error);
            setError(true);
        } finally {
            setTimeout(() => {
                setError(false);
                setSuccess(false);
            }, 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{ width: "100%", padding: "8px", marginTop: "5px", resize: "none" }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    style={{
                        background: "var(--accent)",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: submitting ? "not-allowed" : "pointer"
                    }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;