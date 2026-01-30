import React, { useState } from 'react';
import PatientLayout from "../../components/PatientComponent/PatientLayout";
import { FaStar, FaRegStar, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import "../../styles/components/PatientFeedback.css"

export default function PatientFeedback() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        category: 'General',
        comment: ''
    });

    const categories = [
        'General',
        'Appointment Experience',
        'Doctor Professionalism',
        'Facility Cleanliness',
        'Wait Time',
        'Staff Behavior'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("Please provide a rating");
            return;
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setRating(0);
            setFormData({ category: 'General', comment: '' });
        }, 3000);
    };

    return (
        <PatientLayout>
            <div className="feedback-page-container">
                <div className="feedback-header">
                    <h1>Your Feedback Matters</h1>
                    <p>Help us improve our healthcare services by sharing your experience.</p>
                </div>

                <div className="feedback-form-card">
                    {submitted ? (
                        <div className="success-message">
                            <FaCheckCircle />
                            <h2>Thank You!</h2>
                            <p>Your feedback has been successfully submitted and helps us grow.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>How would you rate your overall experience?</label>
                                <div className="stars-container">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div
                                            key={star}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                            className="star-item"
                                        >
                                            {star <= (hoverRating || rating) ? (
                                                <FaStar style={{ fontSize: '32px', color: '#fbbf24' }} />
                                            ) : (
                                                <FaRegStar style={{ fontSize: '32px', color: '#cbd5e1' }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Select Feedback Category</label>
                                <div className="category-chips">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat}
                                            className={`chip ${formData.category === cat ? 'active' : ''}`}
                                            onClick={() => setFormData({ ...formData, category: cat })}
                                        >
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Tell us more about your experience</label>
                                <textarea
                                    className="feedback-textarea"
                                    placeholder="Your comments here..."
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-feedback-btn"
                            >
                                <FaPaperPlane /> Submit Feedback
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </PatientLayout>
    );
}
