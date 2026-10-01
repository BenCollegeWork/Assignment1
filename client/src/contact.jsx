import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = (event) => {
        setIsSubmitted(true);
        event.preventDefault();
        alert(
            `
                First Name: ${formData.firstName}\n
                Last Name: ${formData.lastName}\n
                Contact Number: ${formData.contactNumber}\n
                Email: ${formData.email}\n
                Message: ${formData.message}
            `
        );
    };

    if (isSubmitted) {
        return <Navigate to="/" replace />
    }

    return (
        <div>
            <h1>Contact</h1>
            <p>Feel free to reach out to me!</p>
            <p>School Email: boliveri@my.centennialcollege.ca</p>
            <p>Business Email: bmoliveria@gmail.com</p>
            <p>Phone: 416-910-5982</p>

            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="contactNumber">Contact Number: </label>
                <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}