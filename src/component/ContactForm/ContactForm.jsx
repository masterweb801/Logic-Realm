import React, { useState } from "react";

function ContactForm({ isSubmitting, setIsSubmitting, setSuccess, setSubmitClick, setError }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitClick(true);
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "6c70d9e1-f517-403d-b963-8918391eb872",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitting(false);
                setSuccess(true)
                setFormData({ name: "", email: "", message: "" });
            } else {
                setIsSubmitting(false);
                setError(true)
            }
        } catch (error) {
            setIsSubmitting(false);
            console.log(error)
            setError(true)
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
                    disabled={isSubmitting}
                    style={{
                        background: "var(--accent)",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: isSubmitting ? "not-allowed" : "pointer"
                    }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;